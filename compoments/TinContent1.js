import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export function TinContent1() {
    return (
        <TouchableOpacity style={styles.itemContent}>
            <View style={styles.iconContent}>
                <View style={styles.avtContent}>
                    <Icon name="user" size={25} color="black" />
                </View>
            </View>
            <Text style={styles.nameContent}>Thêm vào tin</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContent: {
        width: 170,
        height: 240,
        borderRadius: 20,
        backgroundColor: "#ccc",
        position: 'relative',
        marginBottom: 20
    },
    iconContent: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    nameContent: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        fontSize: 16,
        fontWeight: '700',
        color: "#fff"
    },
    avtContent: {
        width: 45,
        height: 45,
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})