import React from 'react'
import { useStateValue } from '../Context/StateProvider'

const MusicPlayer = () => {
  const [{allMusics , music , isSongPlaying, musicIndex, miniPlayer},dispatch]=useStateValue()

  return (
    <div className="w-full full flex items-cente  justify-center gap-3 overflow-hidden">
        <div className={`w-full items-center gap-3 p-4 flex relative`}>
                <img src={allMusics[ musicIndex]?.imageURL} alt="" />
                <p>hello</p>
        </div>
    </div>
  )
}

export default MusicPlayer
