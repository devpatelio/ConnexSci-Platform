import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ListView from './listBounty'
import Link from 'next/link'
import minimum_investor_value from '../models/data_model'

export default function Home() {
  

  return (
    <div className={styles.container}>
      <div className={styles.priceHeader}>
        <p>Total Amount: $5000<b> </b></p>
      </div>
      <h1><u> Connex Bounties</u></h1>
      
      <div className={styles.headerText}>
      <p><b><i>Changing the way we Fund to Inspire Knowledge</i></b></p>
      </div>
      
      
      <ListView/>
      <div className={styles.backButton} >
      
      </div>
      
       

      
    </div>
  )
}
