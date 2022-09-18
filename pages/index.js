import {useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import styles from "../styles/SignUp.module.css"
import Link from 'next/link'



export default function SignUp() {
    
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
        alert("You have Signed up. Please Check Your Email!")
        e.preventDefault()
        const { user, error } = await supabase.auth.signUp({
            email: username,
            password: password,
          })
        
        
              
    }

    return (
        <div>
            <div className={styles.title}>
                
                <p><u>Sign Up to be Apart of the Next-generation of Academia </u></p>
            </div>
            <form className={styles.generalForm}>
                <label> 
                <h3>Username</h3>
                <input type="text" className={styles.Username} onChange={(e) => setUsername(e.target.value)}/>
                </label><br />
                <label>
                <h3> Password </h3>
                <input type="password" className={styles.Password} onChange={(e) => setPassword(e.target.value)}/>
                </label> <br />
                <Link href = "/SignIn" > Already a User?</Link>
                <div className={styles.submitButton}>
                <button type="submit" onClick={signUp}>Submit</button> 
                </div> 

            </form>

        </div>
    )
}

