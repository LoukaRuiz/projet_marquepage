import React, { useEffect } from 'react';
import CustomDrawerContent from './DrawerContent/DrawerContent';
import StackMovieTv from './Movie&Tv/StackMovieTv';
import StackMangaAnime from './Manga&Anime/StackMangaAnime';
import StackComics from './comics/StackComics'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const DrawerNavigation = (props) => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Séries et Films" component={StackMovieTv}  />
      <Drawer.Screen name="Manga et animés" component={StackMangaAnime} />
      <Drawer.Screen name="Comics" component={StackComics} />
    </Drawer.Navigator>
  );


}
export default DrawerNavigation
