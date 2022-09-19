
from flask import Flask, request, render_template, redirect, url_for, jsonify
from serpapi import GoogleSearch
from scipy import spatial
import numpy as np
import pandas as pd
from markupsafe import escape
import os
from scipy import spatial
from scipy import spatial
from math import sqrt
import cohere
import requests
from bs4 import BeautifulSoup

df = pd.read_csv('app/final_embedding.csv') 
os.environ['KMP_DUPLICATE_LIB_OK']='True'

app = Flask(__name__)

def scrape_data(query):

    query = '+'.join(query.split(' '))
    url_template = f"https://serpapi.com/search.json?engine=google_scholar&q={query}"

    params = {
        "engine": "google_scholar",
        "q": query,
        "hl": "en",
        "api_key": "3aaff53cc10bdbc386caf955be287b334daee40d4c85702b35b034c1a17f10a1"
    }

    # "c9fd1f9e1aabf01316abde7496afa68c38493d0a9bd94b7739fa52e0b837e460"
    # "5b0f4c0c3cf5c913e84563a15a0cb5cbe1221c228aebf7b8def7a61df5eb61f9"

    search = GoogleSearch(params)
    results = search.get_dict()

    scrape_link = results['organic_results'][0]['link']

    page = requests.get(scrape_link)
    soup = BeautifulSoup(page.content, "html.parser")

    if 'https://dl.acm.org/doi/abs/' in scrape_link:
        try:
            results = soup.find('div', class_='abstractSection abstractInFull').text
            author = soup.find('span', class_='loa__author-name').text
            publication_value = soup.find('div', class_="issue-item__detail").text
            date = soup.find('span', class_='CitationCoverDate').text

        except:
            results, author, publication_value, date, citations = '','','','',''

    else:
        results, author, publication_value, date, citations = '','','','',''
    
    return scrape_link, [results, '', publication_value, date, author]


#create embeddings for all datapoints available in the dataset
#similarity for the entire matrix

def cosine_similarity(abstract1, abstract2):
    return 1 - spatial.distance.cosine(abstract1, abstract2)

    # print(cosine_similarity(response.embeddings[0], response.embeddings[1]))

def embedding_cosine(abstract1, abstract2):
    co = cohere.Client('ceAwpDf0L1jZEpHLCp1OCM5YJMYVpBvH31w3WnXr')
    response = co.embed(texts=[abstract1, abstract2])
    
    return(cosine_similarity(response.embeddings[0], response.embeddings[1]))

    
from math import sqrt

def manhattan(a, b):
    return 1 - sum(abs(val1-val2) for val1, val2 in zip(a,b))/len(a)



@app.route('/')
def hello():
    return render_template('home.html')

## Scrape Data from PUBMED
@app.route('/input', methods=["POST", "GET"])
def input():
    if request.method == 'POST':
        query = request.form['query_title']
        return redirect(url_for("metadata", query=query))
    else:
        return render_template('link.html')

@app.route(f"/output/<query>")
def metadata(query):
    entry = pd.DataFrame(columns=['name', 'abstract', 'citations', 'publication_value', 'year', 'authors'])
    scrape_link, data_recieving = scrape_data(query)
    print(data_recieving)
    data_recieving.insert(0, query)
    print(data_recieving)

    entry.loc[0] = data_recieving


    # text_embedding = df['name'] + ' ' + df['abstract']
    # text_embedding = text_embedding.tolist()
    
    text_embedding = entry['name'] + ' ' + entry['abstract']
    



    

    
    return render_template('output.html', url=scrape_link, column_names=entry.columns.values, row_data=list(entry.values.tolist()), zip=zip)

