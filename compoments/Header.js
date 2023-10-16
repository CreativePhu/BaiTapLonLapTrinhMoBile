import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderDoanChat } from './HeaderDoanChat'
import { HeaderCuocGoi } from './HeaderCuocGoi'
import { HeaderDanhBa } from './HeaderDanhBa'
import { HeaderTinTuc } from './HeaderTinTuc'

export function Header(props) {
    return (
        <View style={styles.header}>
            {props.type === 1 && <HeaderDoanChat />}
            {props.type === 2 && <HeaderCuocGoi />}
            {props.type === 3 && <HeaderDanhBa />}
            {props.type === 4 && <HeaderTinTuc />}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 1.5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        // borderWidth: 1,
    },
})