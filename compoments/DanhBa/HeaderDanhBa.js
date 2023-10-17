import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export function HeaderDanhBa(props) {
    return (
        <React.Fragment>
            <View style={styles.header_left}>
                <TouchableOpacity onPress={() => { props.navigation.openDrawer() }} style={styles.circle_header}>
                    <Icon name="bars" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.text_title_header}>Danh Bạ</Text>
            </View>
            <TouchableOpacity style={styles.circle_header}>
                <Icon name="address-book" size={20} color="black" />
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
    header_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_title_header: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 20
    },
})