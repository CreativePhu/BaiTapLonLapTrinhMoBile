import React from 'react'
import { Image } from 'react-native';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ThemeContext } from '../../store/myStore';



export function SearchDoanChat({ navigation }) {

    const [name, setName] = React.useState("")

    const [dataUser, setDataUser] = React.useState([])

    const [listFriend, setListFriend] = React.useState([])

    const { data } = React.useContext(ThemeContext)

    const [render, setRender] = React.useState(false)

    function checkIsFriend(item) {
        let check = false;
        listFriend.forEach(element => {
            if (element.username === item.username) {
                check = true;
            }
        })
        if (check) {
            return (
                <TouchableOpacity onPress={() => { deleteFriend(item.username) }} style={{ padding: 5, backgroundColor: "#eb4d4b" }}>
                    <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>Hủy kết bạn</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => { addFriend(item.username) }} style={{ padding: 5, backgroundColor: "#00a8ff" }}>
                    <Text style={{ color: "#ffffff", fontWeight: 'bold' }}> Kết bạn </Text>
                </TouchableOpacity>
            )
        }
    }

    React.useLayoutEffect(() => {
        const url = "http://10.0.2.2:8080/v1/users/name/" + name + "/username/" + data.username;
        fetch(url, {
            method: "GET"
        })
            .then(data => data.json())
            .then((reuslt) => {
                setDataUser(reuslt)
            })
    }, [name, render])

    React.useLayoutEffect(() => {
        const url = "http://10.0.2.2:8080/v1/friends/" + data.username;
        fetch(url, {
            method: "GET"
        })
            .then(data => data.json())
            .then((reuslt) => {
                setListFriend(reuslt)
            })
    }, [data, render])

    function addFriend(username) {
        const url = "http://10.0.2.2:8080/v1/users/addfriend/" + username + "/user/" + data.username
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => {
                if (result.ok) {
                    alert("Thên bạn thành công")
                    setRender(!render)
                } else {
                    alert("Thên bạn thất bại")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function deleteFriend(username) {
        const url = "http://10.0.2.2:8080/v1/users/deletefriend/" + username + "/user/" + data.username
        fetch(url, {
            method: "DELETE",
        })
            .then((result) => {
                if (result.ok) {
                    alert("Xóa bạn thành công")
                    setRender(!render)
                } else {
                    alert("Xóa bạn thất bại")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "",
            headerTitleStyle: { maxWidth: 200, overflow: "hidden" },
            tabBarStyle: { display: "none" },
            headerLeft: () => {
                const styles = StyleSheet.create({
                    coverArroundLeft: {
                        marginLeft: 15
                    }
                })
                return (
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { navigation.goBack(), setName("") }} style={styles.coverArroundLeft}>
                            <FontAwesome5 name="arrow-left" size={20} color={"black"} />
                        </TouchableOpacity>
                        <View>
                            <TextInput value={name} onChangeText={setName} style={{ padding: 5, marginLeft: 15, width: 300, fontSize: 16 }} placeholder='Tìm kiếm' />
                        </View>
                    </View>
                )
            },
        })
    })


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gợi ý</Text>
            <View>
                <FlatList
                    data={dataUser}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.friend}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.imgFriend}>
                                        {/* <Icon name="user" size={25} color="black" /> */}
                                        <Image style={{ width: "100%", height: "100%", borderRadius: 30 }} source={{ uri: item?.image }} />
                                    </View>
                                    <Text style={styles.nameFriend}>{item.name}</Text>
                                </View>
                                {
                                    checkIsFriend(item)
                                }
                                <TouchableOpacity onPress={() => { navigation.navigate("Đoạn chat view", { data: { name: item.name, usernamereceive: item.username, usernamesender: data.username } }) }} style={{ padding: 5, backgroundColor: "#fed330" }}>
                                    <Text style={{ color: "#ffffff", fontWeight: 'bold' }}> Trò chuyện </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    }}
                    extraData={dataUser}
                    keyExtractor={(item) => (item.username)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#fff",
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#ccc",
        marginTop: 10
    },
    friend: {
        width: "100%",
        height: 60,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgFriend: {
        width: 45,
        height: 45,
        borderRadius: 30,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f6f6f6"
    },
    nameFriend: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '600'
    },
})