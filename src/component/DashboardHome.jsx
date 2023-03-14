import React, { useEffect } from 'react';
import { FaUsers } from "react-icons/fa";
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi/index.js";
import { RiUserStarFill } from "react-icons/ri";
import { useStateValue } from '../Context/StateProvider'; 
import { getAllAlbums, getAllArtists, getAllSongs, getAllUser } from '../api/index';
import { actionType } from '../Context/reducer';

export const DashboardCards = ({ icon, name, count }) => {
  return (
    <div className="p-4 gap-3 h-auto rounded-lg shadow-md bg-textColor text-white">
      {icon}
      <p className='text-xl text-white font-bold'>{name}</p>
      <p className='text-xl text-white'>{count}</p>
    </div>
  );
};

const DashboardHome = () => {
  const [{ allUsers, allSong, allAlbum, allArtist }, dispatch] = useStateValue();
  
  useEffect(() => {
    if (!allUsers) {
      getAllUser().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUser: data.data
        });
        console.log(data);
      });
    }

    if (!allSong) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data
        });
        console.log(data);
      });
    }

    if (!allArtist) {
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ARTISTS,
          artists: data.data
        });
        console.log(data);
      });
    }

    if (!allAlbum) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.data
        });
        console.log(data);
      });
    }
  }, []);
      
    return (
    <div className='w-full snap-mandatory p-6 flex items-center justify-evenly flex-wrap'>      
      <DashboardCards icon={<FaUsers className="text-3xl " />} name={"Users"} count={allUsers?.length > 0 ? allUsers?.length : 0} />
      <DashboardCards icon={<GiLoveSong className="text-3xl " />} name={"Songs"} count={allSong?.length > 0 ? allSong?.length : 0} />
      <DashboardCards icon={<RiUserStarFill className="text-3xl " />} name={"Artist"} count={allArtist?.length > 0 ? allArtist?.length : 0} />
      <DashboardCards icon={<GiMusicalNotes className="text-3xl " />} name={"Album"} count={allAlbum?.length > 0 ? allAlbum?.length : 0} />                    
    </div>
  );
};

export default DashboardHome;
