import React,{useEffect} from 'react';
import {View } from 'react-native';
import MovieList from '../../component/MediaList'
const TvScreen = (route) => {
  const {params:{fonction}}=route.route
  console.log(fonction)
  useEffect(() => {
  
},[]);
const fetchPostDetails = async () => {
  try {
    let data = [""];
    switch (fonction) {
      //Fonction qui sort les films série manga des listes
      case 'MyMangaList':
        data = [];
        SetTitle("Mes Mangas");
        break;
      case 'MyAnimeList':
        data = [];
        SetTitle("Mes Animés");
        break;
      case 'MyTvList':
        data = [];
        SetTitle("Mes Séries");
        break;
      case 'MyMovieList':
        data = [];
        SetTitle('Mes Films');
        break;
      case 'MycomicsList':
        data = []
        SetTitle('Mes Comics');
        break;

    }
    return data
  } catch (err) {
    throw err;
  }
};

      return (
        <View style={{flex:1, margin:10}} >
         <MovieList Media={"tv"} page={1} fonction={"TopRated"}/>
        </View>
    )
}

export default TvScreen
