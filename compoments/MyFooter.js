import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DoanChat } from './DoanChat/DoanChat';
import { CuocGoi } from './CuocGoi/CuocGoi';
import { DanhBa } from './DanhBa/DanhBa';
import { Tin } from './Tin/Tin';
import { DoanChatView } from './DoanChat/DoanChatView';
import { SearchDoanChat } from './DoanChat/SearchDoanChat';
import { PainDoanChat } from './DoanChat/PainDoanChat';

const Tab = createBottomTabNavigator();

export function MyFooter({ navigation }) {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 60 },
                tabBarItemStyle: { display: "none" },
                tabBarLabelStyle: { fontSize: 14 },
                headerShown: false,
                headerLeft: () => {
                    const styles = StyleSheet.create({
                        circle_header: {
                            width: 35,
                            height: 35,
                            backgroundColor: "#f6f6f6",
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 15
                        },
                        cover_text_title_header: {
                            flexDirection: 'row',
                            alignItems: 'center'
                        },
                        text_title_header: {
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginLeft: 20
                        },
                    })
                    return (
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }} style={styles.circle_header}>
                            <FontAwesome name="bars" size={18} color="black" />
                        </TouchableOpacity>
                    )
                },
            }}
        >
            <Tab.Screen
                name='Đoạn chat'
                component={DoanChat}
                options={{
                    tabBarItemStyle: { display: "block" },
                }}
            />
            <Tab.Screen
                name='Cuộc gọi'
                component={CuocGoi}
                options={{
                    tabBarItemStyle: { display: "block" },
                    tabBarIcon: ({ color }) => {
                        return <Ionicons name="videocam" size={25} color={color} />
                    },
                }}
            />
            <Tab.Screen
                name='Danh bạ'
                component={DanhBa}
                options={{
                    tabBarItemStyle: { display: "block" },
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome5 name="user-friends" size={25} color={color} />
                    },
                }}
            />
            <Tab.Screen
                name='Tin'
                component={Tin}
                options={{
                    tabBarItemStyle: { display: "block" },
                    tabBarIcon: ({ color }) => {
                        return <MaterialCommunityIcons name="newspaper-variant" size={25} color={color} />
                    },
                    headerShown: true
                }}
            />
            <Tab.Screen
                name='Đoạn chat view'
                component={DoanChatView}
            />
            <Tab.Screen
                name='SearchDoanChat'
                component={SearchDoanChat}
            />
            <Tab.Screen
                name='PainDoanChat'
                component={PainDoanChat}
            />
        </Tab.Navigator>
    )
}