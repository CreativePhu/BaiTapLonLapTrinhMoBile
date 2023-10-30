import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

export function CuocGoiCenter() {
    const [callPhone, setCallPhone] = React.useState([
        { id: 1, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 2, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 3, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 4, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 5, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 6, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 7, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 8, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 9, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 10, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 11, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
        { id: 12, name: "Don Rua Family", time: "Cuộc gọi đến - 13 thg 9", image: "" },
    ])

    return (
        <React.Fragment>
            <Text style={styles.titleContent}>Gần đây</Text>
            <View style={styles.historyCall}>
                {
                    callPhone.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={styles.callPhone}>
                                <View style={styles.callPhoneLeft}>
                                    <View style={styles.imgCallPhone}>
                                        <Icon name="user" size={20} color="black" />
                                    </View>
                                    <View style={styles.detailCallPhone}>
                                        <Text style={styles.nameCallPhone}>{item.name}</Text>
                                        <View style={styles.coverDateCallPhone}>
                                            <Icon1 name="add-call" size={15} color="gray" />
                                            <Text style={styles.dateCallPhone}>{item.time}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.callPhoneRight}>
                                    <Icon name="phone" size={15} color="black" />
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    titleContent: {
        fontSize: 14,
        fontWeight: '700',
        color: "#ccc",
        marginLeft: 15,
        marginBottom: 10
    },
    historyCall: {
        paddingLeft: 15,
        paddingRight: 15
    },
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
        backgroundColor: "#f6f6f6"
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
        backgroundColor: "#f6f6f6",
    },
})