import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { DanhBaContent } from './DanhBaContent';
import { Header } from './Header';
import { Footer } from './Footer'

export function DanhBa({ navigation }) {
    return (
        <View style={styles.container}>
            <Header type={3} />
            <View style={styles.center}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <DanhBaContent />
                </ScrollView>
            </View>
            <Footer navigation={navigation} type={3} />
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