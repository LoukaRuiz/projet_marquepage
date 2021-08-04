import axios from 'axios';
import React from 'react';
const Axios = axios.create({
    baseURL: 'http(s)://gateway.marvel.com/',
});
const useKey = async (route,page) => {
    try {
        if(page === ""){
            const data =  await Axios.get(`${route}?api_key=79513b66c4ff9a9f770a53f15526e4c7`+'&language=fr-FR');
            return data;
        }else{
            const data = await Axios.get(route+`?api_key=79513b66c4ff9a9f770a53f15526e4c7`+`&page=`+page+'&language=fr-FR');
            return data;
        }
    }catch(err){

    }
}
const Api = {
    
    getComic: ()=>{
        const URI = `/v1/public/comics`;
        const params = `?apikey=${useKey}&limit=20&offset=${offset}`
        const url = `${config.baseUrl}${URI}${params}`
        return fetch(url);
    },
    getcomicsuite:(comic)=>{
        const URI = `/v1/public/comics/${comic}/stories`;
        const params = `?apikey=${useKey}&limit=20&offset=${offset}`
        const url = `${config.baseUrl}${URI}${params}`
        return fetch(url);
    },
    
    GetPictureLink:(image)=>{
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocVdLDV-KxZZ0_hbV3JWPnh9luVmS5dsqnw&usqp=CAU'+image
    },
    GetDetails:async(media,comicid)=>{
        const URI = `/v1/public/comics/${comicid}`;
        const params = `?apikey=${useKey}&limit=20&offset=${offset}`
        const url = `${config.baseUrl}${URI}${params}`
        return fetch(url);
    },



};
const ApiContext= React.createContext(Api);
export {Api,Axios};
export default ApiContext