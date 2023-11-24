import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from '../../store/myStore';

export function DoanChatView({ navigation, route }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "",
            headerTitleStyle: { maxWidth: 200, overflow: "hidden" },
            tabBarStyle: { display: "none" },
            headerLeft: () => {
                const styles = StyleSheet.create({
                    coverArroundLeft: {
                        marginLeft: 25
                    }
                })
                return (
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.coverArroundLeft}>
                        <FontAwesome5 name="arrow-left" size={25} color={"black"} />
                    </TouchableOpacity>
                )
            },
            headerTitle: route.params?.data?.name,
            headerTitleStyle: { fontSize: 18 },
            headerRight: () => {
                return (
                    <View style={{ flexDirection: 'row', width: 120, justifyContent: 'space-between', alignItems: 'center', marginRight: 10 }}>
                        <TouchableOpacity>
                            <FontAwesome name='phone' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name='video' size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name='information-circle' size={25} />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    })

    const [message, setmessage] = React.useState("")
    const [listMessage, setListMessage] = React.useState("")
    const [ressetMessage, setRessetMessage] = React.useState(false)
    const { data } = React.useContext(ThemeContext)

    function sendMessage() {
        const url = `http://10.0.2.2:8080/v1/messages/addmesssage/${message}/sender/${route.params?.data?.usernamesender}/idChat/${route.params?.data?.idChat}`
        console.log(url)
        fetch(url, {
            method: "POST"
        })
            .then((result) => {
                if (result.ok) {
                    alert("Gửi thành công !")
                    setmessage("")
                    setRessetMessage(!ressetMessage)
                } else {
                    alert("Fail")
                }
            })
    }

    React.useLayoutEffect(() => {
        const url = `http://10.0.2.2:8080/v1/messages/select/${route.params?.data?.idChat}`
        fetch(url, {
            method: "GET"
        })
            .then(result => result.json())
            .then((data) => {
                setListMessage(data)
            })
    }, [ressetMessage])

    useFocusEffect(
        React.useCallback(() => {
            const url = `http://10.0.2.2:8080/v1/messages/select/${route.params?.data?.idChat}`
            fetch(url, {
                method: "GET"
            })
                .then(result => result.json())
                .then((data) => {
                    setListMessage(data)
                })
        }, [route.params?.data?.idChat])
    );

    return (
        <View style={styles.container}>
            <View style={styles.chat}>
                <FlatList
                    style={{ flex: 1 }}
                    data={listMessage}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ padding: 10, borderRadius: 20, marginTop: 15, backgroundColor: data.username === item.userSender.username ? "#74b9ff" : "#81ecec" }}>
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: "#ffffff" }}>{item.content}</Text>
                            </View>
                        )
                    }}
                    extraData={listMessage}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <AntDesign name='pluscircle' size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name='camera' size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='image' size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name='microphone' size={25} />
                </TouchableOpacity>
                <View style={styles.coverTextInputChat}>
                    <TextInput onSubmitEditing={sendMessage} value={message} onChangeText={setmessage} style={styles.textInputChat} placeholder='Nhắn tin' />
                    <TouchableOpacity style={styles.iconHappy}>
                        <MaterialCommunityIcons name='emoticon-happy' size={25} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <AntDesign name='like1' size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    chat: {
        flex: 1,
    },
    button: {
        position: 'absolute',
        width: "100%",
        height: 50,
        // borderWidth: 1,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    coverTextInputChat: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30
    },
    textInputChat: {
        width: 120,
        height: 40,
        padding: 10,
        borderRadius: 30,
        borderRightWidth: 0,
    },
    iconHappy: {
        paddingLeft: 0,
        paddingRight: 10,
        // borderWidth: 1,
        borderRadius: 30,
    }

})