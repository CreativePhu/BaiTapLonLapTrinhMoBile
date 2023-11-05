import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export function DoanChatCenter({ navigation }) {

    const [dataChatFriend, setDataChatFriend] = React.useState([
        { id: 1, name: "Ngô Thị Diễm Quỳnh", image: "" },
        { id: 2, name: "Ngô Thị Diễm Quỳnh", image: "" },
        { id: 3, name: "Ngô Thị Diễm Quỳnh", image: "" },
        { id: 4, name: "Ngô Thị Diễm Quỳnh", image: "" },
        { id: 5, name: "Ngô Thị Diễm Quỳnh", image: "" },
        { id: 6, name: "Ngô Thị Diễm Quỳnh", image: "" },
        { id: 7, name: "Ngô Thị Diễm Quỳnh", image: "" },
        { id: 8, name: "Ngô Thị Diễm Quỳnh", image: "" },
    ])

    const [dataChat, setDataChat] = React.useState([
        { id: 1, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 2, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 3, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 4, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 5, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 6, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 7, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 8, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 9, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
        { id: 10, name: "Ngô Thị Diễm Quỳnh", image: "", message: "Mai đi chơi không" },
    ])


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
                                paddingTop: 5
                            },
                        })
                        return (
                            <TouchableOpacity style={styles.friend}>
                                <View style={styles.avt_friend}>
                                    <Icon name="user" size={30} color="black" />
                                </View>
                                <Text style={styles.name_friend}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    extraData={dataChatFriend}
                    keyExtractor={(item) => (item.id)}
                />
            </View>
            <View style={styles.listChat}>
                {
                    dataChat.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => { navigation.navigate("Đoạn chat view", { name: item.name }) }} style={styles.chat}>
                                <View style={styles.imgChat}>
                                    <Icon name="user" size={30} color="black" />
                                </View>
                                <View style={styles.titleChat}>
                                    <Text style={styles.nameChat}>{item.name}</Text>
                                    <Text style={styles.contentChat}>{item.message}</Text>
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

