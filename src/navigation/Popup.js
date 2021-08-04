import React from 'react';
import {TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import AddMedia from '../screen/ListeMedia/AddMedia';

const RootStack = createStackNavigator();
const Popup = (props) => {
  return (
    <RootStack.Navigator >
      <RootStack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{ headerShown: false }}
        />
      <RootStack.Screen
        name="AddMedia"
        component={AddMedia}
      />

    </RootStack.Navigator>
  );
}
export default Popup