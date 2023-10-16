import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export function DanhBaContent3() {
    return (
        <TouchableOpacity style={styles.itemListContent}>
            <View style={styles.imgListContent2}>
                <View style={styles.onlineSmall}></View>
            </View>
            <View style={styles.coverDetailListContent}>
                <Text style={styles.textListContent1}>Triều Nguyễn</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    itemListContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 15,
    },
    coverDetailListContent: {
        marginLeft: 10
    },
    textListContent1: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5,
    },
    imgListContent2: {
        width: 40,
        height: 40,
        backgroundColor: "#ccc",
        borderRadius: 30,
        position: 'relative',
    },
    onlineSmall: {
        position: 'absolute',
        width: 15,
        height: 15,
        borderWidth: 2,
        borderRadius: 10,
        bottom: 0,
        right: 0,
        borderColor: "#fff",
        backgroundColor: "#ccc",
    },
})