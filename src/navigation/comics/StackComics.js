import React from 'react';
import {TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import TabComics from './Tabcomics';
import DetailsMedia from '../../screen/Modal/DetailsMedia';
import ApiContext, { Api } from '../../function/ApiComics';

const RootStack = createStackNavigator();
const StackComics = (props) => {
  const{navigation}=props;
  return (
    <ApiContext.Provider value={Api}>
    <RootStack.Navigator >
      <RootStack.Screen
        name="TabComics"
        component={TabComics}
        options={() => ({
          title: 'Bienvenue Movies List',
          headerLeft: () =>(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon raised name='list' type='material-icons'/>
            </TouchableOpacity>
          ),

          })}/>
      

    </RootStack.Navigator>
    </ApiContext.Provider>
  );
}
export default StackComics