import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'})
    try{
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch('http://localhost:3000/api/auth/google',{
        method:'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL
        }),
      })
      const data = await res.json();
      if (res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="mt-3">
      <button 
      type='button' 
      className="w-full p-2 border-2 border-black bg-yellow-400 rounded-md flex justify-center gap-2"
      onClick={handleGoogleClick}
      >
        <AiFillGoogleCircle className='w-6 h-6'/>
        <span>Continue with Google</span>
      </button>
    </div>
  )
}
