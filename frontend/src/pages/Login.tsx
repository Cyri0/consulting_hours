import React, {useState} from 'react'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = (e: React.ChangeEvent)=>{
        e.preventDefault()
        console.log("Hi!");
        
        
    }

  return (
    <div>
        {username}
        <form action="#">
            <label htmlFor="username">Felhasználónév</label><br/>
            <input
                type="text"
                id="username"
                name="username"
                onChange={(e)=>{setUsername(e.target.value)}}
            /><br/>
            <label htmlFor="password">Jelszó</label><br/>
            <input
                type="password"
                name="username"
                onChange={(e)=>{setPassword(e.target.value)}}
                id="password"
            /><br/>
            <input
                type="submit"
                value="Belépés"
                onClick={(e) => login(e)}/>
        </form>
    </div>
  )
}

export default Login