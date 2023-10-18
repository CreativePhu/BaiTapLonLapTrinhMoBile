import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyDrawer } from './compoments/MyDrawer';
import { MyFooter } from './compoments/MyFooter';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <MyDrawer {...props} />}
        screenOptions={{
          drawerStyle: {
            width: 320
          },
        }}>
        <Drawer.Screen
          name="MyFooter"
          component={MyFooter}
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
