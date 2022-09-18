import {useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import styles from "../styles/SignUp.module.css"
import Link from 'next/link'
/*import * as dotenv from 'dotenv'
import * as fs from 'fs'
dotenv.config()
import express from 'express'*/


export default function SignIn()  {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const supabase = createClient(
        'https://jwqcqijxbcbbplhbxxpo.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3cWNxaWp4YmNiYnBsaGJ4eHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0NjMxMzcsImV4cCI6MTk3OTAzOTEzN30.QXfgC_SWEMF968S36SqjLaUqGWWqTVIWYQ19tkE16xs'
      )

    
    const handleUserChange = (e) => {
        setUsername(e.target.value)
        
        
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
        
       
    }

  

    async function signUp (e) {
        console.log("in Function")
        e.preventDefault()
        const { user, error } = await supabase.auth.signIn({
            email: username,
            password: password,
          })
        
        
              
    }

    return (
        <div>
            <div className={styles.title}>
                <h1><b>Not Connexsci</b></h1>
                <p> Research at Your Fingertips</p>
            </div>
            <form className={styles.generalForm}>
                <label > 
                <input type="text" className={styles.Username} onChange={(e) => setUsername(e.target.value)}/>
                </label><br />
                <label>
                <input type="text" className={styles.Password} onChange={(e) => setPassword(e.target.value)}/>
                </label> <br />
                <div className={styles.submitButton}>
                <button type="submit" onClick={signUp}>Sign In</button> 
                </div> 

            </form>

        </div>
    )

    
}