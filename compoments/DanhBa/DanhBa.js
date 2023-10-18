import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Center } from '../Center';

export function DanhBa() {
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