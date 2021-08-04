import React from 'react';
import {View } from 'react-native';
import GetMyList from '../../component/GetMyList'
import MovieList from '../../component/MediaList'
const TvScreen = () => {
     
      return (
        <View style={{flex:1, margin:10}} >
         <GetMyList fonction={"MyTvList"}/>
         <MovieList Media={"tv"} page={1} fonction={"TopRated"}/>
        </View>
    )
}

export default TvScreen
