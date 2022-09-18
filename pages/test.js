import { useState } from 'react'

export default function Test() {
    const [username, setUsername] = useState();

    const signUp = () => {
        console.log(username)
    }

    return (
        <>
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={() => signUp()}>click</button>
        </>
    )
}