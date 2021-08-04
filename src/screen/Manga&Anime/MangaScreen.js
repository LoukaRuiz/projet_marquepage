import React from 'react';
import {View } from 'react-native';
import GetMyList from '../../component/GetMyList'

const MangaScreen = () => {
     
      return (
        <View style={{flex:1, margin:10}} >
          <GetMyList fonction="MyMangaList"/> 
        </View>
    )
}

export default MangaScreen
