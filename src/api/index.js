import axios from 'axios';

const baseURL= 'http://localhost:4000/';

export const validateUser =async (token)=>{
    try {
        const res =await axios.get(`${baseURL}api/user/login`,{
             headers:{
            Authorization: 'Bearer ' + token,
        }
        })
        return res.data;
    } catch (error) {
        
    }
}