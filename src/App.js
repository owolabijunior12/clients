import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import  Home from './component/Home';
import Login from './component/Login';
import { getAuth } from 'firebase/auth'
import { app } from './configuration/firebase.configuration'

const App = () => {
  const firebaseAuth = getAuth(app)
  const nagivate = useNavigate();
  const [auth,setAuth] = useState(false || window.localStorage.getItem("auth")==="true");
  
  useEffect(()=>{
      firebaseAuth.onAuthStateChanged((userCred)=>{
          console.log(userCred)
        if(userCred){
              userCred.getIdToken().then((token)=>{
                console.log(token)
              })
        }else{
          setAuth(false);
          window.localStorage.setItem("auth", false);
          nagivate("./login");
        }
      })
  },[])
  return (
    <div className='min-w-[680px] h-auto  bg-primary flex justify-center items-center'>       
          <Routes>          
            <Route path='/Login' element={<Login setAuth={setAuth}/>} />
            <Route  path='/*'  element={<Home/>} />
          </Routes>
    </div>
  )
}

export default App
