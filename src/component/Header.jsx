import Logo from '../Asset/img/logo.jpeg'
import React from 'react'

const Header = () => {
  return (    
       <header className="flex items-center w-full p-4 md:py-2 md:px-6 bg-black">
        <img src={Logo} alt="logo" width={30} height={30} />
       </header>
   
  )
}

export default Header
