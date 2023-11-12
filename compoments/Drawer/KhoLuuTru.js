import React from 'react'
import { ScrollView } from 'react-native'
import { Text, View, TouchableOpacity } from 'react-native'

export function KhoLuuTru({ navigation }) {

    const [dataGroup, setDataGroup] = React.useState([
        { id: 1, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 2, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 3, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 4, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 5, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 6, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 7, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 8, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 9, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
        { id: 10, name: "Banh bóng", dateOut: "15-02-2002", image: "" },
    ])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            tabBarStyle: { display: "none" },
            headerTitle: ""
        })
    })
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 15, marginBottom: 5 }}>Kho lưu trữ</Text>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {
                    dataGroup.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                                <View style={{ position: 'relative', width: 60, height: 60 }}>
                                    <View style={{ width: 45, height: 45, backgroundColor: "#ccc", borderRadius: 30, position: 'absolute', top: 0, right: 0 }}></View>
                                    <View style={{ width: 40, height: 40, backgroundColor: "#ccc", borderRadius: 30, position: 'absolute', bottom: 0, left: 0, borderWidth: 4, borderColor: "#fff" }}></View>
                                    <View style={{ width: 15, height: 15, backgroundColor: "#ccc", borderRadius: 30, position: 'absolute', bottom: 0, right: 0 }}></View>
                                </View>
                                <View style={{ marginLeft: 15, flex: 1, marginRight: 15 }}>
                                    <Text style={{ fontSize: 16 }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 16 }}>Bạn đã rời khỏi nhóm</Text>
                                        <Text>{item.dateOut}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}