import { useState } from "react"

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password){
      setErrorMessage('Please fill out all fields');
    }
    try{
      const res = await fetch('http://localhost:3000/api/auth/signup',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({
          "username": username,
          "email": email,
          "password": password
        })
      });
      const data = await res.json();
      console.log(data);
    }catch(err){
      setErrorMessage(err.message);
      console.log(errorMessage);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          id="username" 
          placeholder="Enter Username"
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input 
          type="text" 
          id="email" 
          placeholder="email@company.com"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <input 
          type="password" 
          id="password" 
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button className="p-2 border-2 border-black bg-green-400">Sign Up</button>
      </form>
    </div>
  )
}
