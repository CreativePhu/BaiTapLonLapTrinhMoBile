import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { TinContent } from './TinContent';
import { Header } from './Header';
import { Footer } from './Footer'

export function Tin({ navigation }) {
    return (
        <View style={styles.container}>
            <Header type={4} />
            <View style={styles.center}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TinContent />
                </ScrollView>
            </View>
            <Footer navigation={navigation} type={4} />
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
    },
})