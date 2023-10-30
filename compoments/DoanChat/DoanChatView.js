import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function DoanChatView({ navigation, route }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: route.params?.name
        })
    })

    return (
        <View style={styles.container}>
            <Text>Màn Hình Chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})