import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export function PainDoanChat({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            tabBarItemStyle: { display: "none" },
            headerShown: true,
            headerLeft: () => {
                const styles = StyleSheet.create({
                    coverArroundLeft: {
                        marginLeft: 25
                    }
                })
                return (
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.coverArroundLeft}>
                        <FontAwesome5 name="arrow-left" size={25} color={"black"} />
                    </TouchableOpacity>
                )
            },
        })
    })
    return (
        <View>
            <Text>PainDoanChat</Text>
        </View>
    )
}