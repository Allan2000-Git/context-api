import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const submitData = (event) => {
        event.preventDefault();
        setUser({username, password});
    }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" onChange={(event) => setUsername(event.target.value)} name="username" placeholder='Enter your username' value={username}/> &nbsp;
      <input type="text" onChange={(event) => setPassword(event.target.value)} name="password" placeholder='Enter your password' value={password}/> &nbsp;
      <button type="submit" onClick={submitData}>Submit</button>
    </div>
  )
}

export default Login
