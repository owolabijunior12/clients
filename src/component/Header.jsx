import {FaCrown}from 'react-icons/fa'
import Logo from '../Asset/img/logo.jpeg'
import React from 'react'
import {NavLink} from 'react-router-dom'
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import {useStateValue} from '../Context/StateProvider'

const Header = () => {
  const [{user}, dispatch] = useStateValue()
  return (    
       <header className="flex items-center w-full p-4 md:py-2 md:px-6">
            <NavLink to={"/"}>
                    <img src={Logo} alt="logo" className='w-9' />
            </NavLink>      
            <ul className='flex items-center justify-center ml-7'>
                <li className='mx-5  text-lg' ><NavLink className={({isActive})=>isActive ? isActiveStyles:isNotActiveStyles } to={"/home" }>Home</NavLink> </li>
                <li className='mx-5  text-lg' ><NavLink className={({isActive})=>isActive ? isActiveStyles:isNotActiveStyles } to={"/Music"}>Musics</NavLink> </li>
                <li className='mx-5  text-lg' ><NavLink className={({isActive})=>isActive ? isActiveStyles:isNotActiveStyles } to={"/premium"}>Premium</NavLink> </li>
                <li className='mx-5  text-lg' ><NavLink className={({isActive})=>isActive ? isActiveStyles:isNotActiveStyles } to={"/contact us"}>Contact us</NavLink> </li>
            </ul>      
              <div className='flex  items-center ml-auto cursor-pointer gap-2 relative'>
                    <img src={user?.user.imageURL} className=' w-12 h-12 min-w[44px] object-cover rounded-full shadow-lg' alt="user-pic" />
                  <div className='flex flex-col'>
                  <p className='text-textColor text-lg hover:text-headingColor font-semibold'>{user?.user?.name}</p>
                    <p className='flex items-center gap-2 text-gray-500 font-normal'>Premium . <FaCrown className='text-sm -ml-1 text-yellow-500'/></p>
                  </div>
              </div>
       </header>
   
  )
}

export default Header
 