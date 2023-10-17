import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Center } from '../Center';

export function DoanChat({ navigation }) {

    return (
        <View style={styles.container}>
            <Header type={1} navigation={navigation} />
            <Center type={1} />
            <Footer navigation={navigation} type={1} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})
