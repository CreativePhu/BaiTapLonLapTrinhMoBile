import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DanhBaContent1 } from './DanhBaContent1'
import { DanhBaContent2 } from './DanhBaContent2'
import { DanhBaContent3 } from './DanhBaContent3'

export function DanhBaContent() {
    return (
        <View style={styles.contentCenter}>
            <View style={styles.titleCenter}>
                <Text style={styles.titleLeft}>Thông tin mới từ FaceBook (3)</Text>
                <TouchableOpacity>
                    <Text style={styles.titleRight}>XEM TẤT CẢ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContent}>
                <DanhBaContent1 />
                <DanhBaContent1 />
                <DanhBaContent1 />
                <DanhBaContent1 />
                <DanhBaContent1 />
                <DanhBaContent1 />
            </View>
            <View style={styles.titleCenter}>
                <Text style={styles.titleLeft}>Đoạn chat trong cộng đồng của bạn</Text>
                <TouchableOpacity>
                    <Text style={styles.titleRight}>XEM TẤT CẢ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContent1}>
                <DanhBaContent2 />
                <DanhBaContent2 />
                <DanhBaContent2 />
                <DanhBaContent2 />
                <DanhBaContent2 />
                <DanhBaContent2 />
            </View>
            <View style={styles.titleCenter}>
                <Text style={styles.titleLeft}>Đang hoạt động (5)</Text>
            </View>
            <View style={styles.listContent2}>
                <DanhBaContent3 />
                <DanhBaContent3 />
                <DanhBaContent3 />
                <DanhBaContent3 />
                <DanhBaContent3 />
                <DanhBaContent3 />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentCenter: {
        flex: 1,
        // borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    titleCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
    },
    titleLeft: {
        fontSize: 14,
        fontWeight: '700',
        color: "#ccc"
    },
    titleRight: {
        fontSize: 16,
        fontWeight: '700',
        color: "#637EDE"
    },
    listContent: {
        overflow: 'hidden',
    },
    listContent1: {
        overflow: 'hidden',
    },
    listContent2: {
        overflow: 'hidden',
    },
})