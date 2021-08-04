import React from 'react';
import { Alert } from 'react-native';

class MediaClass  {
    titre='';
    EpisodeEnCours ='';
    EpisodeSortie='';
    idMedia='';
    typeMedia='';
    //GETTEUR
    GetTitre= ()=>{
        return this.titre;
    }
    GetEpisodeEnCours=()=>{
        return this.EpisodeEnCours;
    }
    GetEpisodeSortie=()=>{
        return this.EpisodeSortie;
    }
    getIdMedia=()=>{
        return this.idMedia;
    }
    getType=()=>{
        return this.typeMedia; 
    }
    //SETTEUR
    setEpisodeEnCours=(SomeText)=>{
        this.EpisodeEnCours=SomeText;
    }
    setTitre=(SomeText)=>{
        this.titre=SomeText;
    }
    setEpisodeSortie=(SomeText)=>{
        this.EpisodeSortie=SomeText;
    }
    setIdMedia=(SomeText)=>{
        this.idMedia=SomeText;
    }
    setTypeMedia=(SomeText)=>{
        this.typeMedia=SomeText;
    }
    constructor(unTitre,unEpisodeEnCours,unEpisodeSortie,untypeMedia,unIdMedia){
            this.titre=unTitre
            this.EpisodeEnCours=unEpisodeEnCours
            this.EpisodeSortie=unEpisodeSortie
            this.typeMedia=untypeMedia
            this.idMedia=unIdMedia
        };
        
}

 
const media = {
    CreateMedia:  (titre,EpisodeEnCours,EpisodeSortie,typeMedia,idMedia) => {
         return new MediaClass(titre,EpisodeEnCours,EpisodeSortie,typeMedia,idMedia);
    },

};


const mediaContext= React.createContext(media);
export {media};
export default mediaContext