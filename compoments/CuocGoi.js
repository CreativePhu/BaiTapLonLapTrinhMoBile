import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { CallPhone } from './CuocGoiCallPhone';
import { Header } from './Header';
import { Footer } from './Footer'

export function CuocGoi({ navigation }) {
    return (
        <View style={styles.container}>
            <Header type={2} />
            <View style={styles.center}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.titleContent}>Gần đây</Text>
                    <View style={styles.historyCall}>
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                    </View>
                </ScrollView>
            </View>
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