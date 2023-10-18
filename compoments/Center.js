import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { TinCenter } from './Tin/TinCenter';
import { DoanChatCenter } from './DoanChat/DoanChatCenter';
import { CuocGoiCenter } from './CuocGoi/CuocGoiCenter';
import { DanhBaCenter } from './DanhBa/DanhBaCenter';

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