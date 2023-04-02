/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { motion, progress } from "framer-motion";

import { BiCloudUpload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import { storage } from "../configuration/firebase.configuration";
import { useStateValue } from "../Context/StateProvider";
import FilterButtons from "./FilterButtons";
import {
  getAllAlbums,
  getAllArtists ,
  getAllMusics,
  saveNewAlbum,
  saveNewArtist,
  saveNewMusic,
} from "../api";
import { actionType } from "../Context/reducer";
import { filterByLanguage, filters } from "../utils/supportfunctions";
import { IoMusicalNote } from "react-icons/io5";
import AlertSuccess from "./AlertSuccess";
import AlertError from "./AlertError";

const DashboardNewMusics = () => {
    const [isImageLoading, setIsImageLoading] = useState(false);
    const [musicImageCover, setMusicsImageCover] = useState(null);    
    const [setAlert, setSetAlert] = useState(null);
    const [alertMsg, setAlertMsg] = useState("");
    const [imageUploadProgress, setImageUploadProgress] = useState(0);
  
    const [isAudioLoading, setIsAudioLoading] = useState(false);
  
    // const [musicName, setMusicName] = useState("");
    const [audioAsset, setAudioAsset] = useState(null);
    const [duration, setDuration] = useState(null);
    const audioRef = useRef();
    const [
        {
          allArtists,
          allAlbums,
          albumFilter,
          artistFilter,
          filterTerm,
          languageFilter,
        },
        dispatch,
      ] = useStateValue();
    const [musicName, setMusicName] = useState();

  
    useEffect(() => {
        if (!allArtists) {
          getAllArtists().then((data) => {
            dispatch({
              type: actionType.SET_ARTISTS,
              artists: data.artists,
            });
          })
        }
    
        if (!allAlbums) {
          getAllAlbums().then((data) => {
            dispatch({
              type: actionType.SET_ALL_ALBUMS,
              allAlbums: data.albums,
            });
          });
        }
      }, []);




  return (
    <div className="flex items-center justify-center p-4 border border-gray-300 rounded-md">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Type your song name"
          className="w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
          value={musicName}
          onChange={(e) => setMusicName(e.target.value)}
        />

        <div className="flex w-full justify-between flex-wrap items-center gap-4">
          <FilterButtons filterData={allArtists} flag={"Artist"} />
          <FilterButtons filterData={allAlbums} flag={"Albums"} />
          <FilterButtons filterData={filterByLanguage} flag={"Language"} />
          <FilterButtons filterData={filters} flag={"Category"} />
        </div>
        
       <div className="bg-card backdrop-blur-md w-full h-300 rounded-md border-2 border-dotted border-textColor cursor-pointer">          
            {isImageLoading&&<FileLoader progress={imageUploadProgress}/>}
            {!isImageLoading &&(
                <>
                    {!musicImageCover?(
                        < FileUpLoader
                        updateState={setMusicsImageCover} 
                        setProgress={setImageUploadProgress} 
                        isLoading={setIsImageLoading} 
                        isImage={true}
                        />
                    ):(
                        <div className="relative w-full h-full overflow-hidden rounded-md">
                            <img
                             src={musicImageCover}
                             className="w-full object-cover"
                              alt="" 
                              />
                        </div>
                    )}
                </>
            )}
       </div>
      </div>    
    </div>   
  </div>
  )
}
//!file upload from local decive
export const  FileUpLoader =({
  updateState,
  setProgress,
  isLoading,
  isImage,
})=>{

  const uploadFile=(e)=>{

    isLoading(true);
    const uploadFile= e.target.file[0];
    const storageRef =ref(
      storage,
      `${isImage?"Image":"Audio"}/${Date.now()}-${uploadFile.name}`
    );
    const uploadTask =uploadBytesResumable(storageRef,uploadFile);
    uploadTask.on(
      "state_changed",
      (snapshot)=>{
        setProgress((snapshot.bytesTransferred /snapshot.totalBytes)*100)
      },
      (err)=>{
        console.log(err);
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
          updateState(downloadUrl);
          isLoading(false)
        })
      }
    )

  }

  return (
    <label>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col justify-center items-center cursor-pointer">
              <p className="font-bold text-2xl">
                <BiCloudUpload/>
              </p>
              <p className="text-lg">Click to upload {isImage?"an image":"an audio"}</p>
        </div>
      </div>
      <input 
      type="file"
      name="upload-files"
      accept={`${isImage?"image/*":"audio/*"}`}
      onChange={uploadFile}
      />
    </label>
  )
}


//!file showing percent
export const FileLoader =({progress})=>{
    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-xl font-semibold text-textColor">
        {Math.round(progress) > 0 && <>{`${Math.round(progress)}%`}</>}
      </p>
      <div className="w-20 h-20 min-w-[40px] bg-red-600  animate-ping  rounded-full flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full bg-red-600 blur-xl "></div>
      </div>
    </div>
    )
}

export default DashboardNewMusics
