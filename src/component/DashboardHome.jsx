import React, { useEffect } from 'react';
import { FaUsers } from "react-icons/fa";
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi/index.js";
import { RiUserStarFill } from "react-icons/ri";
import { useStateValue } from '../Context/StateProvider'; 
import { getAllAlbums, getAllArtists, getAllSongs, getAllUser } from '../api/index';
import { actionType } from '../Context/reducer';
import {bgColors} from '../utils/styles'


export const DashboardCards = ({ icon, name, count }) => {
  const bg_color =bgColors[parseInt(Math.random()*bgColors.length)]
  return (
    <div style={{background:`${bg_color}`}} className="p-4 gap-3 h-auto rounded-lg shadow-md bg-textColor text-white">
      {icon}
      <p className='text-xl text-white font-bold'>{name}</p>
      <p className='text-xl text-white'>{count}</p>
    </div>
  );
};

const DashboardHome = () => {
  const [{ allUsers, allSong, allAlbum, allArtist }, dispatch] = useStateValue();
  
  useEffect(() => {
    if (allUsers) {
      getAllUser().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUser: data
        });
        console.log(data);
      });
    }

    if (allSong) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data
        });
        console.log(data);
      });
    }

    if (!allArtist) {
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ARTISTS,
          artists: data
        });
        console.log(data);
      });
    }

    if (!allAlbum) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data
        });
        console.log(allAlbum);
      });
    }
  }, []);
      
    return (
    <div className='w-full snap-mandatory p-6 flex items-center text-black justify-evenly flex-wrap'>      
      <DashboardCards icon={<FaUsers className="text-3xl " />} name={"Users"} count={allUsers?.length > 0 ? allUsers?.length : 0} />
      <DashboardCards icon={<GiLoveSong className="text-3xl " />} name={"Songs"} count={allSong?.length > 0 ? allSong?.length : 0} />
      <DashboardCards icon={<RiUserStarFill className="text-3xl " />} name={"Artist"} count={allArtist?.length > 0 ? allArtist?.length : 0} />
      <DashboardCards icon={<GiMusicalNotes className="text-3xl " />} name={"Album"} count={allAlbum?.length > 0 ? allAlbum?.length : "hell"} />                    
    </div>
  );
};

export default DashboardHome;
