import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { TinCenter } from './Tin/TinCenter';
import { DoanChatCenter } from './DoanChat/DoanChatCenter';
import { CuocGoiCenter } from './CuocGoi/CuocGoiCenter';
import { DanhBaCenter } from './DanhBa/DanhBaCenter';

export function Center({ type, navigation }) {
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {type === 1 && <DoanChatCenter navigation={navigation} />}
            {type === 2 && <CuocGoiCenter />}
            {type === 3 && <DanhBaCenter />}
            {type === 4 && <TinCenter />}
        </ScrollView>
    )
}
