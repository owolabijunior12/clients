import React from 'react'
import { useStateValue } from '../Context/StateProvider'

const MusicPlayer = () => {
  const [{allMusics , musics , isSongPlaying, musicIndex, miniPlayer},dispatch]=useStateValue()

  return (
    <div className="w-full full flex items-center  justify-center gap-3 overflow-hidden">
        <div className={`w-full items-center gap-3 p-4 flex relative`}>
                <img 
                src={allMusics[ musicIndex]?.imageURL} 
                alt="music-artistimage" 
                className='w-40 h-20 object-cover rounded-md'
                />
              <div className="flex items-start flex-col">
                  <p className='text-xl text-handingColor font-semibold'>
                        {`${
                          allMusics[ musics]?.name.length>20
                          ?allMusics[musics]?.name.slice(0,20)
                          :allMusics[musics]?.name
                        }
                        `}{"  "}
                        {/* <span> {{allMusics[musics]?.albums}} </span> */}
                  </p>
              </div>
        </div>
    </div>
  )
}

export default MusicPlayer
