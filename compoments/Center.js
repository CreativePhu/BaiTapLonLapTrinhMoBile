import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { TinCenter } from './TinCenter';
import { DoanChatCenter } from './DoanChatCenter';
import { CuocGoiCenter } from './CuocGoiCenter';
import { DanhBaCenter } from './DanhBaCenter';

export function Center({ type }) {
    return (
        <View style={styles.center}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {type === 1 && <DoanChatCenter />}
                {type === 2 && <CuocGoiCenter />}
                {type === 3 && <DanhBaCenter />}
                {type === 4 && <TinCenter />}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 12,
        // borderWidth: 1,
    },
})