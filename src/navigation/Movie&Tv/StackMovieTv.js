import React from 'react';
import {TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import TabMovie from './TabMovieTv';
import DetailsMedia from '../../screen/Modal/DetailsMedia'
import ApiContext, { Api } from '../../function/Api'

const RootStack = createStackNavigator();
const StackMovieTv = (props) => {
  const{navigation}=props;
  return (
    <ApiContext.Provider value={Api}>
      <RootStack.Navigator >
        <RootStack.Screen
          name="TabMovie"
          component={TabMovie}
          options={() => ({
            title: 'Bienvenue ',
            headerLeft: () =>(
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon raised name='list' type='material-icons'/>
              </TouchableOpacity>
            ),

            })}/>
        
        <RootStack.Screen name="DetailsMedia" 
        component={DetailsMedia} 
        options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </ApiContext.Provider>

  );
}
export default StackMovieTv