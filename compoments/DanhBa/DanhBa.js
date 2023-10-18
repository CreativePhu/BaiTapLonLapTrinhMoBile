import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../Header';
import { Center } from '../Center';

export function DanhBa({ navigation }) {
    return (
        <View style={styles.container}>
            <Header type={3} navigation={navigation} />
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