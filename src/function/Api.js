import axios from 'axios';
import React from 'react';
const Axios = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
const useKey = async (route,page) => {
    try {
        if(page === ""){
            const data =  await Axios.get(`${route}?api_key=ddfe5a708a4462f52c3264f5f2c5bc49`+'&language=fr-FR');
            return data;
        }else{
            const data = await Axios.get(route+`?api_key=ddfe5a708a4462f52c3264f5f2c5bc49`+`&page=`+page+'&language=fr-FR');
            return data;
        }
    }catch(err){

    }
}
const Api = {
    
    getPopular: (media,page)=>{
        const route=media+'/popular';
        const data=useKey(route,page)
        return data;
    },
    getLatest:(media,page)=>{
        const route=media+'/latest';
        const data=useKey(route,page)
        return data;

    },
    getTopRated:(media,page)=>{
        const route=media+'/top_rated';
        const data=useKey(route,page);
        return data;
    },
    GetTrend:(media,weekOrDay)=>{
        if(weekOrDay){//week
            const route=`/trending/${media}/week`;
            const data =useKey(route,'');
            return data;
        }else{//day
            const route=`/trending/${media}/day`;
            const data =useKey(route,'');
            return data;
        }
    },
    GetPictureLink:(image)=>{
        return 'http://image.tmdb.org/t/p/w500//'+image
    },
    GetDetails:async(media,id)=>{
        const route=`/${media}/${id}`;
        return(useKey(route,'').then(res=>{
            const {data}=res;
            return data;
        }).catch(err =>{
            console.log('erreur lors de la récupération des détails') ;
          }))
    },



};
const ApiContext= React.createContext(Api);
export {Api,Axios};
export default ApiContext