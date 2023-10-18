import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CallPhone } from './CuocGoiCallPhone';

export function CuocGoiCenter() {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    titleContent: {
        fontSize: 14,
        fontWeight: '700',
        color: "#ccc",
        marginLeft: 15,
        marginBottom: 10
    },
    historyCall: {
        paddingLeft: 15,
        paddingRight: 15
    },
})