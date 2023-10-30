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

const Tab = createBottomTabNavigator();

export function MyFooter({ navigation }) {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 60 },
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
                    tabBarIcon: ({ color, focused, size }) => {
                        return <Ionicons name="chatbubble-sharp" size={25} color={color} />
                    },
                    headerShown: true,
                    headerRight: () => {
                        const styles = StyleSheet.create({
                            circle_header: {
                                width: 35,
                                height: 35,
                                backgroundColor: "#f6f6f6",
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 15
                            }
                        })
                        return (
                            <TouchableOpacity style={styles.circle_header}>
                                <FontAwesome name="pencil" size={18} color="black" />
                            </TouchableOpacity>
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Cuộc gọi'
                component={CuocGoi}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <Ionicons name="videocam" size={25} color={color} />
                    },
                    headerShown: true,
                    headerRight: () => {
                        const styles = StyleSheet.create({
                            circle_header: {
                                width: 35,
                                height: 35,
                                backgroundColor: "#f6f6f6",
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            },
                            header_right: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginRight: 15,
                                width: 90
                            },
                        })
                        return (
                            <View style={styles.header_right}>
                                <TouchableOpacity style={styles.circle_header}>
                                    <FontAwesome name="phone" size={18} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.circle_header}>
                                    <FontAwesome name="video-camera" size={18} color="black" />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Danh bạ'
                component={DanhBa}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <FontAwesome5 name="user-friends" size={25} color={color} />
                    },
                    headerShown: true,
                    headerRight: () => {
                        const styles = StyleSheet.create({
                            circle_header: {
                                width: 35,
                                height: 35,
                                backgroundColor: "#f6f6f6",
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 15
                            },
                        })
                        return (
                            <TouchableOpacity style={styles.circle_header}>
                                <FontAwesome name="address-book" size={18} color="black" />
                            </TouchableOpacity>
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Tin'
                component={Tin}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <MaterialCommunityIcons name="newspaper-variant" size={25} color={color} />
                    },
                    headerShown: true
                }}
            />
            <Tab.Screen
                name='Đoạn chat view'
                component={DoanChatView}
                options={{
                    tabBarItemStyle: { display: "none" },
                    headerShown: true,
                    headerTitle: "",
                    tabBarStyle: { display: "none" },
                    headerLeft: () => {
                        const styles = StyleSheet.create({
                            coverArroundLeft: {
                                marginLeft: 15
                            }
                        })
                        return (
                            <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.coverArroundLeft}>
                                <FontAwesome5 name="arrow-left" size={25} color={"black"} />
                            </TouchableOpacity>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}