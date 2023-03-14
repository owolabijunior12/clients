import React, { useEffect } from 'react';
import { FaUsers } from "react-icons/fa";
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi/index.js";
import { RiUserStarFill } from "react-icons/ri";
import { useStateValue } from '../Context/StateProvider'; 
import { getAllAlbums, getAllArtist, getAllSong, getAllUsers } from '../api/index';
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
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data
        });
        console.log(data);
      });
    }

    if (!allSong) {
      getAllSong().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSong: data.data
        });
        console.log(data);
      });
    }

    if (!allArtist) {
      getAllArtist().then((data) => {
        dispatch({
          type: actionType.SET_ARTISTS,
          allArtist: data.data
        });
        console.log(data);
      });
    }

    if (!allAlbum) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMNS,
          allAlbum: data.data
        });
        console.log(data);
      });
    }
  }, []);

  return (
    <div className='w-full snap-mandatory p-6 flex items-center justify-evenly flex-wrap'>
      <FaUsers />
      <DashboardCards icon={<FaUsers />} name={"Users"} count={allUsers?.length > 0 ? allUsers?.length : 0} />
      <DashboardCards icon={<GiLoveSong className="text-3xl text-textColor" />} name={"Songs"} count={allSong?.length > 0 ? allSong?.length : 0} />
      <DashboardCards icon={<RiUserStarFill className="text-3xl text-textColor" />} name={"Artist"} count={allArtist?.length > 0 ? allArtist?.length : 0} />
      <DashboardCards icon={<GiMusicalNotes className="text-3xl text-textColor" />} name={"Album"} count={allAlbum?.length > 0 ? allAlbum?.length : 0} />                    
    </div>
  );
};

export default DashboardHome;
