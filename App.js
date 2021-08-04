import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Popup from './src/navigation/Popup'
import { Provider } from 'mobx-react';
import { configure } from 'mobx';
import {mediaStore} from './src/store/MediaStore'
configure({
  enforceActions:'never'
});
export default function App() {
  const stores = {mediaStore}
  return (
    <Provider {...stores}>
      <NavigationContainer>
          <Popup/>
      </NavigationContainer>
    </Provider>

  );
}

