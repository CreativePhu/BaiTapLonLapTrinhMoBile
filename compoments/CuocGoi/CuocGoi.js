import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Center } from '../Center';

export function CuocGoi() {
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