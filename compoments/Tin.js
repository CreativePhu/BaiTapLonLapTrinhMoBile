import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Footer } from './Footer'

export function Tin({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_left}>
                    <TouchableOpacity style={styles.circle_header}>
                        <Icon name="bars" size={20} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.text_title_header}>Tin</Text>
                </View>
            </View>
            <View style={styles.center}>

            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 1.5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        borderWidth: 1,
    },
    circle_header: {
        width: 40,
        height: 40,
        backgroundColor: "#ccc",
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_title_header: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 20
    },
    center: {
        flex: 12,
        borderWidth: 1,

    },
})