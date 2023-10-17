import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../Header';
import { Center } from '../Center';
import { Footer } from '../Footer'

export function CuocGoi({ navigation }) {
    return (
        <View style={styles.container}>
            <Header type={2} navigation={navigation} />
            <Center type={2} />
            <Footer navigation={navigation} type={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    center: {
        flex: 12,
        // borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
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