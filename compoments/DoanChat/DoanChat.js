import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Center } from '../Center';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function DoanChat({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            tabBarIcon: ({ color }) => {
                return <Ionicons name="chatbubble-sharp" size={25} color={color} />
            },
            headerShown: true,
            headerRight: () => {
                const styles = StyleSheet.create({
                    circle_header: {
                        width: 35,
                        height: 35,
                        backgroundColor: "#f6f6f6",
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 15
                    }
                })
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate("PainDoanChat") }} style={styles.circle_header}>
                        <FontAwesome name="pencil" size={18} color="black" />
                    </TouchableOpacity>
                )
            }
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <Center type={1} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})

