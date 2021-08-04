import React from 'react';
import {View} from 'react-native';
import MyMovieList from '../../component/MyMovieList';
import MySerieList from '../../component/MySerieList';

const MyListsScreen = () => {
  return(
    <View style={{flex:1, margin:10}}>
      <MyMovieList Media={"movie"} page={1} fonction={"MyList"}/>
      <MySerieList Media={"tv"} page={1} fonction={"MyList"}/>
    </View>
  );
}

export default MyListsScreen
