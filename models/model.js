
import sampleVotes from "./data_model"


//let sampleVotes = sampleVotes
function defineSquareArea(proposition) {
    let propositionDict = sampleVotes[proposition]
    let contributions = Object.values(propositionDict)[0]
    let totalContributions = 0 
    for (let contributionIdx = 0; contributionIdx <= contributions.length; contributionIdx++) {
        const contribution = contributions[contributionIdx]
        if (contribution === undefined) {
            continue
        } else {
            const squareRoot = Math.sqrt(contribution)
            totalContributions += squareRoot

        }
        
    }
    const squareArea = totalContributions ** 2
    sampleVotes[proposition] = {[squareArea]:contributions}
    console.log(`Square Area for ${proposition} has been updated`)
    console.log(sampleVotes)
    
}

defineSquareArea("Vote1")

function findInfoArea() {
    var supportAreasLst = []
    var sumOfAreas = 0 
    const sampleVotesKeys = Object.keys(sampleVotes)
    
    for (let keyIdx =0; keyIdx <= sampleVotesKeys.length; keyIdx++) {
        let key = sampleVotesKeys[keyIdx]
        if (key === undefined) {
            continue
        } else {
            const relativeDictionary = sampleVotes[key]
            const relativeDictKeys = Object.keys(relativeDictionary)[0]
            supportAreasLst.push(parseInt(relativeDictKeys))
            sumOfAreas += parseInt(relativeDictKeys)
        
        }

        

    }

   
    return [Math.max(...supportAreasLst), sumOfAreas]
}




function supportAreaTax(proposition) {
    const currentSupportArea = Object.keys(sampleVotes[proposition])[0]
    const minimumTax = 1000 
    const relativeSupportInformation = findInfoArea()
    const largestSupport = relativeSupportInformation[0]
    console.log(relativeSupportInformation)
    const sumOfAreas = relativeSupportInformation[1]
    //console.log(sum_of_areas)

    const difference = parseInt(currentSupportArea) - minimumTax
    console.log(largestSupport)
    const quotient = difference/parseInt(largestSupport)

    const maximum  = Math.max(quotient,  0)
    const product =  maximum * (parseInt(currentSupportArea) / sumOfAreas)
    return product
}

supportAreaTax("Vote1")

export default function supportAreaIncrease(proposition) {
    const propositionDict = sampleVotes[proposition]
    const relativeSupportArea = Object.keys(propositionDict)[0]
    const relativeVotes = Object.values(propositionDict)[0]
    const relativeTax = supportAreaTax(proposition)
    const inverseTax = (1 - relativeTax) ** 2
    const newSupportDifference = relativeSupportArea * inverseTax
    sample_votes[proposition] = {[newSupportDifference]: relativeVotes}
    console.log(sampleVotes)
}

//supportAreaIncrease("Vote1")