import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MangaScreen from '../../screen/Manga&Anime/MangaScreen';
import AnimeScreen from '../../screen/Manga&Anime/AnimeScreen';
const TabNav = createBottomTabNavigator();
const TabMangaAnime = (props) => {
  const { navigation } = props;
  return (
    <TabNav.Navigator>
      <TabNav.Screen
        name="MangaScreen"
        component={MangaScreen}
        options={{
          tabBarLabel: 'Manga',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open" color={color} size={26} />
          )
        }}
      />
      <TabNav.Screen
        name="AnimeScreen"
        component={AnimeScreen}
        options={{
          tabBarLabel: 'Animé',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open" color={color} size={26} />
          )
        }}
      />
    </TabNav.Navigator>
  );
}

export default TabMangaAnime