import React, { useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { GiLoveSong, GiMusicalNotes } from 'react-icons/gi';
import { RiUserStarFill } from 'react-icons/ri';
import { useStateValue } from '../Context/StateProvider'; 
import { getAllAlbums, getAllArtists, getAllSongs, getAllUser } from '../api/index';
import { actionType } from '../Context/reducer';
// import { bgColors } from '../utils/styles';

export const DashboardCards = ({ icon, name, count }) => {
  // const bg_color = bgColors[parseInt(Math.random() * bgColors.length)];
  return (
    <div className="p-4 gap-3 h-auto rounded-lg shadow-md bg-textColor text-white">
      {icon}
      <p className='text-xl text-white font-bold'>{name}</p>
      <p className='text-xl text-white'>{count}</p>
    </div>
  );
};

const DashboardHome = () => {
  const [{ allUsers, allSongs, allAlbums, allArtists }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allUsers) {
      getAllUser().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.users
        });
        console.log(data);
      });
    }

    if (!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.songs
        });
        console.log(data);
      });
    }

    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.albums
        });
        console.log(data.albums);
      });
    }
    if (!allArtists) {
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ARTISTS,
          artists: data.artists
        });
        console.log(data.artists);
      });
    }
  }, []);

  return (
    <div className="w-full snap-mandatory p-6 flex items-center text-black justify-evenly flex-wrap">      
      <DashboardCards icon={<FaUsers className="text-3xl" />} name="Users" count={allUsers?.length ?? 0} />
      <DashboardCards icon={<GiLoveSong className="text-3xl" />} name="Songs" count={allSongs?.length ?? 0} />
      <DashboardCards icon={<RiUserStarFill className="text-3xl" />} name="Artists" count={allArtists?.length ?? 0} />
      <DashboardCards icon={<GiMusicalNotes className="text-3xl" />} name="Albums" count={allAlbums?.length ?? 0} />                    
    </div>
  );
};

export default DashboardHome;
