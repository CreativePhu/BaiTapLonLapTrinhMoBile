import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DoanChat } from './compoments/DoanChat/DoanChat';
import { CuocGoi } from './compoments/CuocGoi/CuocGoi';
import { DanhBa } from './compoments/DanhBa/DanhBa';
import { Tin } from './compoments/Tin/Tin';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Đoạn Chat" component={DoanChat} options={{ headerShown: false }} />
        <Stack.Screen name="Cuộc Gọi" component={CuocGoi} options={{ headerShown: false }} />
        <Stack.Screen name="Danh Bạ" component={DanhBa} options={{ headerShown: false }} />
        <Stack.Screen name="Tin" component={Tin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

