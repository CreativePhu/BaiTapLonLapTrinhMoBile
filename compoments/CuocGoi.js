import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { CallPhone } from './CallPhone';
import { Footer } from './Footer'

export function CuocGoi({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_left}>
                    <TouchableOpacity style={styles.circle_header}>
                        <Icon name="bars" size={20} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.text_title_header}>Cuộc Gọi</Text>
                </View>
                <View style={styles.header_right}>
                    <TouchableOpacity style={styles.circle_header}>
                        <Icon name="phone" size={20} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle_header}>
                        <Icon name="video-camera" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.center}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.titleContent}>Gần đây</Text>
                    <View style={styles.historyCall}>
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                        <CallPhone />
                    </View>
                </ScrollView>
            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
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
        flex: 3,
    },
    text_title_header: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 20
    },
    header_right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,

    },
    center: {
        flex: 12,
        // borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    titleContent: {
        fontSize: 14,
        fontWeight: '700',
        color: "#ccc",
        marginLeft: 10,
        marginBottom: 5
    },
    historyCall: {
        marginTop: 10
    },
})