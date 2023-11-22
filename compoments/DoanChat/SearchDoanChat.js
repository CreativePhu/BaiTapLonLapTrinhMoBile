import React from 'react'
import { Image } from 'react-native';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ThemeContext } from '../../store/myStore';



export function SearchDoanChat({ navigation }) {

    const [name, setName] = React.useState("")

    const [dataFriend, setDataFriend] = React.useState([])

    const { data } = React.useContext(ThemeContext)

    React.useLayoutEffect(() => {
        const url = "http://10.0.2.2:8080/v1/users/name/" + name;
        fetch(url, {
            method: "GET"
        })
            .then(data => data.json())
            .then((reuslt) => {
                setDataFriend(reuslt)
            })
    }, [name])

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
                } else {
                    alert("Thên bạn thành thất bại")
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
                        <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.coverArroundLeft}>
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
                    data={dataFriend}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.friend}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.imgFriend}>
                                        {/* <Icon name="user" size={25} color="black" /> */}
                                        <Image style={{ width: "100%", height: "100%", borderRadius: 30 }} source={{ uri: item.image }} />
                                    </View>
                                    <Text style={styles.nameFriend}>{item.name}</Text>
                                </View>
                                <TouchableOpacity onPress={() => { addFriend(item.username) }} style={{ borderWidth: 1, padding: 5, backgroundColor: "blue" }}>
                                    <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>Kết bạn</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    }}
                    extraData={dataFriend}
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
        fontSize: 16,
        fontWeight: 'bold',
    },
})