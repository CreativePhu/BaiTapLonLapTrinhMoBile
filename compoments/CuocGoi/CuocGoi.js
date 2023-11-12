import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Center } from '../Center';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export function CuocGoi({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerRight: () => {
                const styles = StyleSheet.create({
                    circle_header: {
                        width: 35,
                        height: 35,
                        backgroundColor: "#f6f6f6",
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    header_right: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginRight: 15,
                        width: 90
                    },
                })
                return (
                    <View style={styles.header_right}>
                        <TouchableOpacity onPress={() => { navigation.navigate("CuocGoiThoai") }} style={styles.circle_header}>
                            <FontAwesome name="phone" size={18} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("CuocGoiVideo") }} style={styles.circle_header}>
                            <FontAwesome name="video-camera" size={18} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    })
    return (
        <View style={styles.container}>
            <Center type={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    titleContent: {
        fontSize: 14,
        fontWeight: '700',
        color: "#ccc",
        marginLeft: 10,
        marginBottom: 5
    },
    historyCall: {
        marginTop: 10
    },
})