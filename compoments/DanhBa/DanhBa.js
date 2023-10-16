import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../Header';
import { Center } from '../Center';
import { Footer } from '../Footer'

export function DanhBa({ navigation }) {
    return (
        <View style={styles.container}>
            <Header type={3} />
            <Center type={3} />
            <Footer navigation={navigation} type={3} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})