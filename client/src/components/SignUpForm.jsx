import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner'
import OAuth from "./OAuth";

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password){
      setErrorMessage('Please fill out all fields');
    }
    try{
      setLoading(true);
      setErrorMessage(null);
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
      if (data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok){
        navigate('/sign-in');
      }
    }catch(err){
      setErrorMessage(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="flex-1">
      <h1 className="text-4xl font-bold text-center mb-4">Create Account</h1>
      <p className="mb-12 text-center">Or use your email for registration</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="py-2">
          <input 
            type="text"
            id="username" 
            placeholder="Enter Username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value.trim())}}
            className="w-full bg-[rgb(237,235,237)] px-4 py-2 rounded-xl placeholder-gray-500"
          />
        </div>
        <div className="py-2">
          <input 
            type="text" 
            id="email" 
            placeholder="email@company.com"
            value={email}
            onChange={(e)=>{setEmail(e.target.value.trim())}}
            className="w-full bg-[rgb(237,235,237)] px-4 py-2 rounded-xl placeholder-gray-500"
          />
        </div>
        <div className="py-2">
          <input 
            type="password" 
            id="password" 
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value.trim())}}
            className="w-full bg-[rgb(237,235,237)] px-4 py-2 rounded-xl placeholder-gray-500"
          />
        </div>
        <div className="text-center mt-5">
          <button className="w-full p-2 border-2 border-black bg-green-400 rounded-md">
            {loading ? (
              <>
                <Oval
                  visible={true}
                  height="20"
                  width="40"
                  color="#ffffff"
                  secondaryColor="#0078d4"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                <span>Loading...</span>
              </>
            ) : (
              'Sign Up'
            )}
          </button>
          <OAuth/>
        </div>
      </form>
      <div className="flex gap-2 text-sm mt-5">
        <span>Have an account?</span>
        <Link to="/sign-in" className='text-blue-500'>
          Sign In
        </Link>
      </div>
      {
        errorMessage && (
          <div className=" bg-red-100 w-full px-4 py-2 mt-5 text-red-700 rounded-lg">
            {errorMessage}
          </div>
        )
      }
    </div>
  )
}
