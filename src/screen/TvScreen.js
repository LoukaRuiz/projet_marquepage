import React from 'react';
import {View } from 'react-native';
import MovieList from '../component/MediaList'
const TvScreen = () => {
     
      return (
        <View style={{flex:1, margin:10}} >
            <MovieList Media={"tv"} page={2} fonction={"TopRated"}/>
            <MovieList Media={"tv"} page={1} fonction={"Trend"}/>
        </View>
    )
}

export default TvScreen
