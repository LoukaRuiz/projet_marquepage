import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieScreen from '../../screen/MovieAndTv/MovieScreen';
import TvScreen from '../../screen/MovieAndTv/TvScreen';
const TabNav = createBottomTabNavigator();
const TabMovieTv = (props) => {
  const{navigation,listStore}=props;
  return (
    <TabNav.Navigator>
      <TabNav.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
          tabBarLabel: 'Films',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open" color={color} size={26} />
          )
        }}
      />
      <TabNav.Screen
        name="Tv"
        component={TvScreen}
        options={{
          tabBarLabel: 'Séries',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-roll" color={color} size={26} />
          )
        }}
      />
    </TabNav.Navigator>
  );
}

export default TabMovieTv