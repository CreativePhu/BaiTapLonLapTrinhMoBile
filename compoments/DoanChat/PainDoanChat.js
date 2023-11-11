import React from 'react'
import { FlatList } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';


export function PainDoanChat({ navigation }) {

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
                            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                                <FontAwesome5 name="arrow-left" size={25} color={"black"} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, marginLeft: 20 }}>Đoạn chat mới</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                            <Text style={{ fontSize: 16, color: "#ccc", marginRight: 5 }}>Đến:</Text>
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
                <FontAwesome5 name="user-friends" size={25} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15 }}>Nhóm chat</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ccc", paddingLeft: 15 }}>Gợi ý</Text>
            <View style={{ padding: 15 }}>
                {
                    dataFriend.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: 45, height: 45, borderRadius: 30, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="user" size={25} color="black" />
                                </View>
                                <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}