import {observable,action, makeObservable} from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
class MediaStore {
    MyMangaList=[];
    MyAnimeList=[];
    MyTvList=[];
    MyMovieList=[];
    MycomicsList=[];

    addAnimeList=(anime)=>{
        MyAnimeList.push(anime)
    }
    addManga=(manga)=>{
        MyMangaList.push(manga)
    }
    addTv=(Tv)=>{
        MyTvList.push(Tv)
    }
    addMovie=(Movie)=>{
        MyMovieList.push(Movie)
    }    
    addComics=(Comics)=>{
        MycomicsList.push(Comics)
    }
    delAnime=(index)=>{
        MyAnimeList.splice(0, index);
    }
    delManga=(index)=>{
        MyMangaList.splice(0, index);
    }
    delTv=(index)=>{
        MyTvList.splice(0, index);
    }
    delMovie=(index)=>{
        MyMovieList.splice(0, index);
    }
    delComics=(index)=>{
        MycomicsList.splice(0, index);
    }
    SaveList = async () => {
        try {
          const data =[MyMangaList,MyAnimeList,MyTvList,MyMovieList,MycomicsList]
          const jsonValue = JSON.stringify(data)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
      }
      GetList = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // saving error
        }
      }
    constructor(){
        makeObservable(this,{
            MyMangaList:observable,
            MyTvList:observable,
            MyMovieList:observable,
            MycomicsList:observable,
            MyAnimeList:observable,
            addAnimeList:action,
            addManga:action,
            addTv:action,
            addMovie:action,
            addComics:action,
            delAnime:action,
            delManga:action,
            delTv:action,
            delMovie:action,
            delComics:action,
            SaveList:action,
            GetList:action
        });
    }
}

const mediaStore = new MediaStore();
export {mediaStore};