import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export function Marketplace({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            tabBarStyle: { display: "none" },
            headerRight: () => {
                return (
                    <TouchableOpacity style={{ marginRight: 15 }}>
                        <MaterialIcons name="facebook" size={30} />
                    </TouchableOpacity>
                )
            }
        })
    })
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center' }}>
            <Text>Đang trong quá trình phát triển.....</Text>
        </View>
    )
}