import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export function HeaderCuocGoi(props) {
    return (
        <React.Fragment>
            <View style={styles.header_left}>
                <TouchableOpacity onPress={() => { props.navigation.openDrawer() }} style={styles.circle_header}>
                    <Icon name="bars" size={18} color="black" />
                </TouchableOpacity>
                <Text style={styles.text_title_header}>Cuộc Gọi</Text>
            </View>
            <View style={styles.header_right}>
                <TouchableOpacity style={styles.circle_header}>
                    <Icon name="phone" size={18} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle_header}>
                    <Icon name="video-camera" size={18} color="black" />
                </TouchableOpacity>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    circle_header: {
        width: 35,
        height: 35,
        backgroundColor: "#f6f6f6",
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 3,
    },
    text_title_header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20
    },
    header_right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,

    },
})