import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Center } from '../Center';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function DanhBa({ navigation }) {
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
                        marginRight: 15
                    },
                })
                return (
                    <TouchableOpacity style={styles.circle_header}>
                        <FontAwesome name="address-book" size={18} color="black" />
                    </TouchableOpacity>
                )
            }
        })
    })
    return (
        <View style={styles.container}>
            <Center type={3} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})