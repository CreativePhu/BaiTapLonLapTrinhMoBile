import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export function HeaderDoanChat() {
    return (
        <React.Fragment>
            <View style={styles.cover_text_title_header}>
                <TouchableOpacity style={styles.circle_header}>
                    <Icon name="bars" size={20} color="gray" />
                </TouchableOpacity>
                <Text style={styles.text_title_header}>Đoạn Chat</Text>
            </View>
            <TouchableOpacity style={styles.circle_header}>
                <Icon name="pencil" size={20} color="gray" />
            </TouchableOpacity>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    circle_header: {
        width: 40,
        height: 40,
        backgroundColor: "#ccc",
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cover_text_title_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_title_header: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 20
    },
})