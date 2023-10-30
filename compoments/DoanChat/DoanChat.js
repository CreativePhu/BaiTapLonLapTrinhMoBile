import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Center } from '../Center';

export function DoanChat({ navigation }) {
    return (
        <View style={styles.container}>
            <Center type={1} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})

