import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { ScrollView } from 'react-native';


export function CuocGoiVideo({ navigation }) {

    const [dataFriend, setDataFriend] = React.useState([
        { id: 1, name: "Thiên Phú", image: "" },
        { id: 2, name: "Thiên Phú", image: "" },
        { id: 3, name: "Thiên Phú", image: "" },
        { id: 4, name: "Thiên Phú", image: "" },
        { id: 5, name: "Thiên Phú", image: "" },
        { id: 6, name: "Thiên Phú", image: "" },
        { id: 7, name: "Thiên Phú", image: "" },
        { id: 8, name: "Thiên Phú", image: "" },
        { id: 9, name: "Thiên Phú", image: "" },
        { id: 10, name: "Thiên Phú", image: "" },
        { id: 11, name: "Thiên Phú", image: "" },
        { id: 12, name: "Thiên Phú", image: "" },
        { id: 13, name: "Thiên Phú", image: "" },
        { id: 14, name: "Thiên Phú", image: "" },
        { id: 15, name: "Thiên Phú", image: "" },
    ])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "",
            tabBarStyle: { display: "none" },
            headerShown: true,
            headerLeft: () => {
                return (
                    <View style={{ marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate("Cuộc gọi") }}>
                                <FontAwesome5 name="arrow-left" size={20} color={"black"} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, marginLeft: 20 }}>Bắt đầu cuộc gọi video</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                            <Text style={{ fontSize: 16, color: "#ccc", marginRight: 5 }}>Với:</Text>
                            <TextInput style={{ fontSize: 16, padding: 10, width: 300 }} placeholder='Hãy nhập tên hoặc nhóm' />
                        </View>
                    </View>
                )
            },
            headerStyle: { height: 120 }
        })
    })
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: "#fff" }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: "100%", padding: 15 }}>
                <MaterialIcons name="groups" size={30} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15 }}>Bắt đầu cuộc gọi video nhóm mới</Text>
            </TouchableOpacity>
            <ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
                {
                    dataFriend.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: 45, height: 45, borderRadius: 30, backgroundColor: "#f6f6f6", justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="user" size={25} color="black" />
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                                    <View style={{ width: 35, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: "#f6f6f6" }}>
                                        <Ionicons name="videocam" size={15} color="black" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </ScrollView>
    )
}