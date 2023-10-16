import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export function DanhBaContent2() {
    return (
        <TouchableOpacity style={styles.itemListContent}>
            <View style={styles.imgListContent1}>
                <View style={styles.imgListContent1_big}></View>
                <View style={styles.imgListContent1_small}></View>
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
    listContent1: {
        overflow: 'hidden',
    },
    imgListContent1: {
        width: 40,
        height: 40,
        // backgroundColor: "#ccc",
        position: 'relative',
    },
    imgListContent1_big: {
        width: 35,
        height: 35,
        // borderWidth: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: "#ccc",
        borderRadius: 10,
    },
    imgListContent1_small: {
        width: 25,
        height: 25,
        borderWidth: 3,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1,
        borderRadius: 20,
        backgroundColor: "#ccc",
        borderColor: "#fff",
    },
})