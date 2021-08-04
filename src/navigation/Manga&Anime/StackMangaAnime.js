import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import TabMangaAnime from './TabMangaAnime';
import DetailsMedia from '../../screen/Modal/DetailsMedia'

const RootStack = createStackNavigator();
const StackMangaAnime = (props) => {
  const { navigation } = props;
  return (
    <RootStack.Navigator >
      <RootStack.Screen
        name="TabMangaAnime"
        component={TabMangaAnime}
        options={() => ({
          title: 'Bienvenue sur Marque page',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon raised name='list' type='material-icons' />
            </TouchableOpacity>
          ),

        })} />

      <RootStack.Screen name="DetailsMedia"
        component={DetailsMedia}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
export default StackMangaAnime