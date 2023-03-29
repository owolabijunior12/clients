import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {  IoTrash } from "react-icons/io5";
const MusicCard = ( {data, index}) => {
    const [isDeleted, setIsDeleted] = useState(false);
  return (
  <motion.div className='relative w-40 min-w-210 px-2 cursor-pointer hover:bg-card bg-yellow-100 shadow-md flex flex-col items-center py-3 rounded-xl'>
        <div  className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
            <motion.img
                whileHover={{ scale: 1.05 }}
                src={data.imageURL}
                alt=""
                className=" w-full h-full rounded-lg object-cover"
            />
        </div>
        <p className="text-base text-headingColor font-semibold my-2">
        {data.name.length > 25 ? `${data.name.slice(0, 14)}...` : data.name}
        <span className="block text-sm text-gray-400 my-1">{data.artist}</span>
      </p> 
      <div className="w-full absolute bottom-2 right-2 flex items-center justify-between px-4">
        <motion.i whileTap={{ scale: 0.75 }} onClick={() => setIsDeleted(true)}>
          <IoTrash className="text-base text-red-400 drop-shadow-md hover:text-red-600" />
        </motion.i>
      </div>
      
  </motion.div>
  )
} 

export default MusicCard
