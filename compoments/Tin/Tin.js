import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Center } from '../Center';

export function Tin() {
    return (
        <View style={styles.container}>
            <Center type={4} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})