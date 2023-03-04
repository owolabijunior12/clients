import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home,Login } from './component'
import { getAuth } from 'firebase/auth'
import { app } from './configuration/firebase.configuration'

const App = () => {
  const firebaseAuth = getAuth(app)
  const nagivate = useNavigate();
  const [auth,setAuth] = useState(false || window.localStorage.getItem("auth")==="true")
  useEffect(()=>{
      firebaseAuth.onAuthStateChanged((userCred)=>{
        if(userCred){
          userCred.getIdToken().then((token)=>{
            console.log(token)
          })
        }else{
          setAuth(false);
          window.localStorage.setItem("auth", "false");
          nagivate("./login")
        }
      })
  },[])
  return (
    <div className='w-screen h-screen  bg-primary flex justify-center items-center'>
       <div className='w-screen-half flex flex-column'>
          <Routes>          
            <Route path='/Login' element={<Login setAuth={setAuth}/>} />
            <Route  path='/*'  element={<Home/>} />
          </Routes>
       </div>
    </div>
  )
}

export default App
