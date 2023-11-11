import React from 'react'
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export function SearchDoanChat({ navigation }) {

    const [dataFriend, setDataFriend] = React.useState([
        { id: 1, name: "Thiên Phú", image: "" },
        { id: 2, name: "Thiên Phú", image: "" }
    ])

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
                            <FontAwesome5 name="arrow-left" size={25} color={"black"} />
                        </TouchableOpacity>
                        <View>
                            <TextInput style={{ padding: 5, marginLeft: 15, width: 300, fontSize: 16 }} placeholder='Tìm kiếm' />
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
                                <View style={styles.imgFriend}>
                                    <Icon name="user" size={25} color="black" />
                                </View>
                                <Text style={styles.nameFriend}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    extraData={dataFriend}
                    keyExtractor={(item) => (item.id)}
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
        justifyContent: 'flex-start',
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
        fontWeight: 'bold',
    },
})