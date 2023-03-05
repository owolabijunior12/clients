import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home,Login } from './component'
import { getAuth } from 'firebase/auth'
import { app } from './configuration/firebase.configuration'
// import { jwtDecode, jwtVerify, resignJwt } from 'jwt-js-decode';
const App = () => {
  const firebaseAuth = getAuth(app)
  const nagivate = useNavigate();
  const [auth,setAuth] = useState(false || window.localStorage.getItem("auth")==="true");
    //  // just decode 'token' into {header: Object, payload: Object, signature: String}
    //  let jwt = jwtDecode('token');
    //  console.log(jwt.payload);
 
    //  // or verify 'token' with provided secret and decode it
    //  jwtVerify('token', 'secret').then(res => {
    //      if (res === true) {
    //          const jwt = jwtDecode('token');
    //          console.log(jwt.payload);
    //      }
    //  });
     
    //  // advanced resignJwt token with newSecret secret should be same type as jwt.header.alg
    //  resignJwt('token', 'newSecret').then(newToken =>  {
    //      console.log(newToken);
    //  });
  useEffect(()=>{
      firebaseAuth.onAuthStateChanged((userCred)=>{
        if(userCred){
          userCred.getIdToken().then((token)=>{
            console.log("JWT token obtained successfully:", token);

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
