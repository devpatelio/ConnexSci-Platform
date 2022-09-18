import sampleVotes from "../models/data_model"
import {useState} from 'react'
import supportAreaIncrease from '../models/model'
import styles from '../styles/Bounty.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'




export default function DetailedView() {

    
    const [price, setPrice] = useState(0)
    const [bountyName, setBounty] = useState('')
    const router = useRouter()
    
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
            
    }
    
    const handleBountyName = (e) => {
        setBounty(e.target.value)
    }

    const influencePrice = (e) => {
        

        supportAreaIncrease(bountyName)            // Change to Title
        const votingDict = sampleVotes[bountyName]
        const votingValues = Object.values(votingDict)
        votingValues.push(price)
        console.log(`voting_values: ${votingValues}`)

        votingDict[supportAreaIncrease] = votingValues
        sampleVotes[bountyName] = votingDict
        minimumInvestorValue -= price

        router.push('/bounty')
        
        
    }

    return (
        <div>
            <div className={styles.title}>
                <h1><b>Apply for a Bounty</b></h1>
                <p><i>Making a Change can never Hurt Anyone</i></p>
            </div>
            <form className={styles.generalForm}>
                <label > 
                <div className="header1">
                    <h2><b><u>Funding Amount (omit $)</u></b></h2>
                </div>
                <input type="text" className={styles.Username} onChange={(e) => setPrice(e.target.value)}/>
                </label>
                <label > 
                <div className="header2">
                    <h2><u><b> Bounty Name</b></u> </h2>
                </div>  
                <input type="text" className={styles.Username} onChange={(e) => setBounty(e.target.value)}/>
                </label>
                <div className={styles.submitButton}>
                <button type="submit" onClick={influencePrice}>Fund</button> 
                <Link href="/bounty"><button> Back </button></Link>
                </div> 

            </form>

        </div>
    )
}