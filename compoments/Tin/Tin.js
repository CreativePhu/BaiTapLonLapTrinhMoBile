import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Center } from '../Center';
import { Header } from '../Header';

export function Tin({ navigation }) {
    return (
        <View style={styles.container}>
            <Header type={4} navigation={navigation} />
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