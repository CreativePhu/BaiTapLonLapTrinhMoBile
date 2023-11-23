import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../../store/myStore';
import { useFocusEffect } from '@react-navigation/native';

export function DoanChatCenter({ navigation }) {

    const { data } = React.useContext(ThemeContext)

    const [dataChatFriend, setDataChatFriend] = React.useState([])

    const [dataChat, setDataChat] = React.useState([])

    useFocusEffect(
        React.useCallback(() => {
            const url = "http://10.0.2.2:8080/v1/friends/" + data.username;
            fetch(url, {
                method: "GET"
            })
                .then(data => data.json())
                .then((reuslt) => {
                    setDataChatFriend(reuslt)
                })
        }, [data])
    );

    React.useLayoutEffect(() => {
        const url = "http://10.0.2.2:8080/v1/friends/" + data.username;
        fetch(url, {
            method: "GET"
        })
            .then(data => data.json())
            .then((reuslt) => {
                setDataChatFriend(reuslt)
            })
    }, [])

    React.useLayoutEffect(() => {
        const url = "http://10.0.2.2:8080/v1/chats/select/user1/" + data.username;
        fetch(url, {
            method: "GET"
        })
            .then(data => data.json())
            .then((reuslt) => {
                setDataChat(reuslt)
            })
    }, [])


    return (
        <View style={styles.contentCenter}>
            <TouchableOpacity onPress={() => { navigation.navigate("SearchDoanChat") }} style={styles.search}>
                <View style={styles.cover_iconSearch}>
                    <Icon name="search" size={20} color="gray" />
                </View>
                <Text style={styles.placeholderSearch}>Tìm Kiếm</Text>
            </TouchableOpacity>
            <View style={styles.listFriend}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={dataChatFriend}
                    renderItem={({ item }) => {
                        const styles = StyleSheet.create({
                            friend: {
                                overflow: 'hidden',
                                width: 80,
                                maxHeight: 100,
                                // borderWidth: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 15
                            },
                            avt_friend: {
                                width: 55,
                                height: 55,
                                backgroundColor: "#f6f6f6",
                                borderRadius: 30,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            },
                            name_friend: {
                                fontSize: 12,
                                // borderWidth: 1,
                                width: "100%",
                                maxHeight: 40,
                                overflow: 'hidden',
                                paddingTop: 5,
                                textAlign: 'center'
                            },
                        })
                        return (
                            <TouchableOpacity style={styles.friend}>
                                <View style={styles.avt_friend}>
                                    {/* <Icon name="user" size={30} color="black" /> */}
                                    <Image resizeMode='cover' style={{ width: "100%", height: "100%", borderRadius: 30 }} source={{ uri: item.image }} />
                                </View>
                                <Text style={styles.name_friend}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    extraData={dataChatFriend}
                    keyExtractor={(item) => (item.username)}
                />
            </View>
            <View style={styles.listChat}>
                {
                    dataChat.map((item) => {
                        let users = null;
                        item.users.forEach(element => {
                            if (element?.username !== data.username) {
                                users = element;
                            }
                        });
                        return (
                            <TouchableOpacity key={item.id} onPress={() => { navigation.navigate("Đoạn chat view", { data: { name: users?.name, usernamereceive: users?.username, usernamesender: data.username } }) }} style={styles.chat}>
                                <View style={styles.imgChat}>
                                    {/* <Icon name="user" size={30} color="black" /> */}
                                    <Image resizeMode='contain' style={{ width: "100%", height: "100%", borderRadius: 30 }} source={{ uri: users?.image }} />
                                </View>
                                <View style={styles.titleChat}>
                                    <Text style={styles.nameChat}>{users?.name}</Text>
                                    {
                                        <Text style={styles.contentChat}>Xin Chao</Text>
                                    }
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentCenter: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "92%",
        backgroundColor: "#f6f6f6",
        borderRadius: 20,
        height: 40,
    },
    cover_iconSearch: {
        width: 60,
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderSearch: {
        fontSize: 15,
        color: "gray"
    },
    listFriend: {
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listChat: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15
    },
    chat: {
        // borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 15
    },
    imgChat: {
        width: 55,
        height: 55,
        borderRadius: 60,
        backgroundColor: "#f6f6f6",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleChat: {
        marginLeft: 10
    },
    nameChat: {
        fontSize: 16,
        marginBottom: 5
    },
    contentChat: {
        fontSize: 13,
    },
})

