import React from 'react';
import {View} from 'react-native';
import MovieList from '../component/MediaList'

const MovieScreen = () => {
  return(
    <View style={{flex:1, margin:10}}>
      <MovieList Media={"movie"} page={1} fonction={"TopRated"}/>
      <MovieList Media={"movie"} page={1} fonction={"Popular"}/>
    </View>
    
  );
}

export default MovieScreen
