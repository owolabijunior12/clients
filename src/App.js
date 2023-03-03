import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home,Login } from './component'

const App = () => {
  return (
    <div className='w-screen h-screen  bg-primary flex justify-center items-center'>
       <div className='w-screen-half flex flex-column'>
          <Routes>          
            <Route path='/Login' element={<Login/>} />
            <Route  path='/*'  element={<Home/>} />
          </Routes>
       </div>
    </div>
  )
}

export default App
