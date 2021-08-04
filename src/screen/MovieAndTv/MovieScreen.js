import React from 'react';
import {View} from 'react-native';
import GetMyList from '../../component/GetMyList'
const MovieScreen = () => {
  return(
    <View style={{flex:1, margin:10}}>
      <GetMyList fonction={"MyMovieList"}/>
    </View>
    
  );
}

export default MovieScreen
