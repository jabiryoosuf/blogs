import axios from "axios";

export const BASICURL ="http://192.168.29.231:4000"
// export const BASICURL ="http://192.168.164.70:4000"

export const axiosAPI = axios.create({
    baseURL:BASICURL,
    withCredentials:true,
})
axiosAPI.interceptors.request.use(function(config){
    const token = localStorage.getItem("token")
    if(token){
        config.headers['Authorization']='Bearer '+ token;
    }else{
        console.log("error");
    }
    
    return config;
 })