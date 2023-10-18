import 'react-native-gesture-handler';
import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DoanChat } from './compoments/DoanChat/DoanChat';
import { CuocGoi } from './compoments/CuocGoi/CuocGoi';
import { DanhBa } from './compoments/DanhBa/DanhBa';
import { Tin } from './compoments/Tin/Tin';
import { MyDrawer } from './compoments/MyDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <MyDrawer {...props} />}
        screenOptions={{
          drawerStyle: {
            width: Dimensions.get('window').width / 1.3,
          },
        }}>
        <Drawer.Screen
          name="DoanChat"
          component={DoanChat}
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="CuocGoi"
          component={CuocGoi}
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="DanhBa"
          component={DanhBa}
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Tin"
          component={Tin}
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
