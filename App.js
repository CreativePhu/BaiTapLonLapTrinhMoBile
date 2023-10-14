import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DoanChat } from './compoments/DoanChat';
import { CuocGoi } from './compoments/CuocGoi';
import { DanhBa } from './compoments/DanhBa';
import { Tin } from './compoments/Tin';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    // <DoanChat />
    // <CuocGoi />
    // <DanhBa />
    // <Tin />
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

