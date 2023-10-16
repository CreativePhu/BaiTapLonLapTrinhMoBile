import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export function DanhBaContent1() {
    return (
        <TouchableOpacity style={styles.itemListContent}>
            <View style={styles.imgListContent}>

            </View>
            <View style={styles.coverDetailListContent}>
                <Text style={styles.textListContent1}>Triều Nguyễn</Text>
                <Text style={styles.textListContent2}>Đã chia sẻ bài viết của Quỳnh Như - Hôm Qua</Text>
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
    imgListContent: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#ccc",
    },
    coverDetailListContent: {
        marginLeft: 10
    },
    textListContent1: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5,
    },
    textListContent2: {
        fontSize: 13,
        fontWeight: '600',
        color: "#ccc"
    },
})