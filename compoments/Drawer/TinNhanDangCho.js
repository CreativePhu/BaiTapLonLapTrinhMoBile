import React from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function TinNhanDangCho({ navigation }) {

    const [typeMessage, setTypeMessage] = React.useState(true)
    const [data, setData] = React.useState([
        { id: 1, name: "Ngô Thiên Phú", newMessage: "chào cậu !", timeChat: "12-02-2002", image: "" }
    ])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Tin nhắn đang chờ",
            headerRight: () => {
                return (
                    <TouchableOpacity>
                        <Text style={{ color: "blue", fontSize: 16, marginRight: 15 }}>Chỉnh sửa</Text>
                    </TouchableOpacity>
                )
            }
        })
    })
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={() => { setTypeMessage(true) }} style={{ padding: 6, borderRadius: 20, width: 140, justifyContent: 'center', alignItems: 'center', backgroundColor: typeMessage === true ? "#ccc" : "#fff" }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Bạn có thể biết</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setTypeMessage(false) }} style={{ padding: 6, borderRadius: 20, width: 140, justifyContent: 'center', alignItems: 'center', backgroundColor: typeMessage === false ? "#ccc" : "#fff" }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Spam</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                                <View style={{ width: 50, height: 50, borderRadius: 30, backgroundColor: "#f6f6f6" }}>

                                </View>
                                <View style={{ marginLeft: 15, flex: 1, marginRight: 15 }}>
                                    <Text style={{ fontSize: 16 }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 16 }}>{item.newMessage}</Text>
                                        <Text>{item.timeChat}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}