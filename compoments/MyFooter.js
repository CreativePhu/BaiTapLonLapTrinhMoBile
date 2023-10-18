import React from 'react'
import { moduleName } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DoanChat } from './DoanChat/DoanChat';
import { CuocGoi } from './CuocGoi/CuocGoi';
import { DanhBa } from './DanhBa/DanhBa';
import { Tin } from './Tin/Tin';

const Tab = createBottomTabNavigator();

export function MyFooter() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 70 },
                tabBarLabelStyle: { fontSize: 14 },
                headerShown: false
            }}
        >
            <Tab.Screen
                name='DoanChat'
                component={DoanChat}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <Ionicons name="chatbubble-sharp" size={25} color={color} />
                    },
                }}
            />
            <Tab.Screen
                name='CuocGoi'
                component={CuocGoi}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <Ionicons name="videocam" size={25} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name='DanhBa'
                component={DanhBa}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <FontAwesome5 name="user-friends" size={25} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name='Tin'
                component={Tin}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <MaterialCommunityIcons name="newspaper-variant" size={25} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}