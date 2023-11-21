import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './compoments/Drawer/Drawer';
import DataProvider from './store/myStore';

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </DataProvider>
  );
}
