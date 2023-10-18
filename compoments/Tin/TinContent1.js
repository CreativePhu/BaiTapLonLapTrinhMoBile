import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export function TinContent1() {
    return (
        <TouchableOpacity style={styles.itemContent}>
            <View style={styles.iconContent}>
                <View style={styles.avtContent}>
                    <Icon name="user" size={20} color="black" />
                </View>
            </View>
            <Text style={styles.nameContent}>Thêm vào tin</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContent: {
        width: 160,
        height: 220,
        borderRadius: 20,
        backgroundColor: "#f6f6f6",
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
        width: 40,
        height: 40,
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})