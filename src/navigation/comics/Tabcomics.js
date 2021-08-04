import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieScreen from '../../screen/MovieAndTv/MovieScreen';
const TabNav = createBottomTabNavigator();
const Tabcomics = (props) => {
  const{navigation,listStore}=props;
  return (
    <TabNav.Navigator>
      <TabNav.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
          tabBarLabel: 'Comics',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open" color={color} size={26} />
          )
        }}
      />

    </TabNav.Navigator>
  );
}

export default Tabcomics