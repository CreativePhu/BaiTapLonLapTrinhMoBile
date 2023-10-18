import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { TinContent1 } from './TinContent1';

export function TinCenter() {
    return (
        <View style={styles.contentCenter}>
            <TouchableOpacity style={styles.itemContent}>
                <View style={styles.iconContent}>
                    <Icon1 name="add" size={30} color="black" />
                </View>
                <Text style={styles.nameContent}>Thêm vào tin</Text>
            </TouchableOpacity>
            <TinContent1 />
            <TinContent1 />
            <TinContent1 />
            <TinContent1 />
            <TinContent1 />
            <TinContent1 />
        </View>
    )
}

const styles = StyleSheet.create({
    contentCenter: {
        paddingLeft: 15,
        paddingRight: 15,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
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
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})