import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner'
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "./OAuth";

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error:errorMessage} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password){
      return dispatch(signInFailure('Please fill out all fields'));
    }
    try{
      dispatch(signInStart());
      const res = await fetch('http://localhost:3000/api/auth/signin',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      });
      const data = await res.json();
      if (data.success === false){
        dispatch(signInFailure(data.message));
      }
      if (res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }catch(err){
      dispatch(signInFailure(err.message));
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
            {!loading ? (
              'Sign In'
            ) : (
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
            )}
          </button>
          <OAuth/>
        </div>
      </form>
      <div className="flex gap-2 text-sm mt-5">
        <span>Don&apos;t have an account?</span>
        <Link to="/sign-up" className='text-blue-500'>
          Sign Up
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