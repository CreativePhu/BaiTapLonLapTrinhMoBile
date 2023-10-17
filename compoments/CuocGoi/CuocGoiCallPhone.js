import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

export function CallPhone() {
    return (
        <TouchableOpacity style={styles.callPhone}>
            <View style={styles.callPhoneLeft}>
                <View style={styles.imgCallPhone}>
                    <Icon name="user" size={20} color="black" />
                </View>
                <View style={styles.detailCallPhone}>
                    <Text style={styles.nameCallPhone}>Don Rua Family</Text>
                    <View style={styles.coverDateCallPhone}>
                        <Icon1 name="add-call" size={15} color="gray" />
                        <Text style={styles.dateCallPhone}>Cuộc gọi đến - 13 thg 9</Text>
                    </View>
                </View>
            </View>
            <View style={styles.callPhoneRight}>
                <Icon name="phone" size={15} color="black" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    callPhone: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    callPhoneLeft: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imgCallPhone: {
        width: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ccc"
    },
    detailCallPhone: {
        paddingLeft: 10
    },
    nameCallPhone: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5,
    },
    coverDateCallPhone: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateCallPhone: {
        marginLeft: 10,
        fontSize: 12,
        fontWeight: '700',
        color: "#ccc"
    },
    callPhoneRight: {
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        height: 30,
        width: 30,
        backgroundColor: "#ccc",
    },
})