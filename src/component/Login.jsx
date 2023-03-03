import React from 'react'
import {FcGoogle} from "react-icons/fc"
import {app} from '../configuration/firebase.configuration';
import {getAuth, GoogleAuthProvider, signInWithPopup}from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const firebaseAuth = getAuth(app)
  const provider =new GoogleAuthProvider();
  const navigate  = useNavigate()
    const loginWithGoogle = async ()=>{
      await signInWithPopup(firebaseAuth, provider)
      .then((userCred)=>{
          console.log(userCred)
      })

      console.log("iboytech got it");
    }
  return (
    <div className='relative w-screen h-screen'>
        <div className='absolute inset-0 bg-darkOverlay flex justify-center p-4  items-center'>
            <div className='w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center'>
                  <div onClick={loginWithGoogle} className=' flex items-center justify-center gap-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card duration-100 ease-in-out transition-all'>
                      <FcGoogle className='text-xl'/> Sigin with Google
                  </div>                                     
            </div>
        </div>
    </div>
  )
}

export default Login
