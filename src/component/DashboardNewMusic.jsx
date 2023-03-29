import React, { useEffect, useRef, useState } from "react";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { motion } from "framer-motion";

import { BiCloudUpload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import { storage } from "../configuration/firebase.configuration";
import { useStateValue } from "../Context/StateProvider";
// import FilterButtons from "./FilterButtons";
import {
  getAllAlbums,
  getAllArtists ,
  getAllSongs,
  saveNewAlbum,
  saveNewArtist,
  saveNewMusic,
} from "../api";
import { actionType } from "../Context/reducer";
import { filterByLanguage, filters } from "../utils/supportfunctions";
import { IoMusicalNote } from "react-icons/io5";
// import AlertSuccess from "./AlertSuccess";
// import AlertError from "./AlertError";

const DashboardNewMusic = () => {
  return (
    <div className="flex flex-col  items-center justify-center p-4 border border-gray-300 rounded">
        DashboardNewMusic
    </div>
  )
}

export default DashboardNewMusic
