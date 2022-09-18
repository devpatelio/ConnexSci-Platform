
import sampleVotes from "../models/data_model"

import styles from '../styles/List.module.css'
import Link from 'next/link'


export default function ListView() {

    const votes = Object.keys(sampleVotes)          // 1:1
    const vote_data = Object.values(sampleVotes)
    const surface_area = Object.keys(vote_data)
    const number_of_votes = Object.values(vote_data) // Number of Votes in List
    const relative_value = 5000             // $5000 dollars we assume theuser has


    let vote_iterations = votes.map((vote, index) => {
        return (
            <div className={styles.gridContainer1} key={index}>
                <h3 key={vote}> {vote}</h3>
                <p>Info on Vote</p>

            </div>
        )
    })

    console.log(vote_data)
    let arrayed_data = vote_data.map((dictionary, index) => {
        return (
            
            <div className={styles.gridContainer2} key={index}>
                <div className={styles.gridContainer3}>
                    <div className={styles.gridContainer4}>
                        <p key={Math.random()}>Surface Area: {Object.keys(dictionary)[0]}</p>
                        <p key = {Math.random()}> Current Bounty: {Math.max(...Object.values(dictionary)[0])}</p>
                    </div>
                    <div className={styles.gridContainer5}>
                        <Link href="/DetailView"><button key={index}>Bounty</button></Link>
                    </div>

                </div>
                
            </div>

          
        )
    })

    return (
        <div className={styles.gridContainer}>
            <div >
                {vote_iterations}
                </div>
            <div>
                {arrayed_data}
                </div>
            
        
            
        </div>
    )
}