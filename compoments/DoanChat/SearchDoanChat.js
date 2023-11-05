import React from 'react'
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


export function SearchDoanChat({ navigation }) {

    const [dataFriend, setDataFriend] = React.useState([
        { id: 1, name: "Thiên Phú", image: "" },
        { id: 2, name: "Thiên Phú", image: "" }
    ])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                const styles = StyleSheet.create({
                    textInputSearch: {
                        width: 300,
                        // borderWidth: 1,
                        padding: 5,
                        marginRight: 20
                    }
                })
                return (
                    <View>
                        <TextInput style={styles.textInputSearch} placeholder='Tìm kiếm' />
                    </View>
                )
            }
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
                                    <Icon name="user" size={30} color="black" />
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
        paddingLeft: 10,
        paddingRight: 10,
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
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameFriend: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
})