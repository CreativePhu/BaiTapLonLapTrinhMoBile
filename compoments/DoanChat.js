import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Footer } from './Footer';
import { Friend } from './Friend';
import { Chat } from './Chat';


export function DoanChat({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.cover_text_title_header}>
                    <TouchableOpacity style={styles.circle_header}>
                        <Icon name="bars" size={20} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.text_title_header}>Đoạn Chat</Text>
                </View>
                <TouchableOpacity style={styles.circle_header}>
                    <Icon name="pencil" size={20} color="gray" />
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.contentCenter}>
                        <TouchableOpacity style={styles.search}>
                            <View style={styles.cover_iconSearch}>
                                <Icon name="search" size={20} color="gray" />
                            </View>
                            <Text style={styles.placeholderSearch}>Tìm Kiếm</Text>
                        </TouchableOpacity>
                        <View style={styles.listFriend}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollview_listFriend}>
                                <Friend name={"Ngô Thị Diễm Quỳnh"} />
                                <Friend name={"Ngô Thị Diễm Quỳnh"} />
                                <Friend name={"Ngô Thị Diễm Quỳnh"} />
                                <Friend name={"Ngô Thị Diễm Quỳnh"} />
                                <Friend name={"Ngô Thị Diễm Quỳnh"} />
                                <Friend name={"Ngô Thị Diễm Quỳnh"} />
                            </ScrollView>
                        </View>
                        <View style={styles.listChat}>
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                            <Chat name={"Ngô Thiên Phú"} contentChat={"Mai đi chơi không"} />
                        </View>
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
        paddingBottom: 15
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
    cover_text_title_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_title_header: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 20
    },
    center: {
        backgroundColor: "#fff",
        overflow: 'hidden',
        flex: 12,
    },
    contentCenter: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "92%",
        backgroundColor: "#CCC",
        borderRadius: 20,
        height: 40,
    },
    cover_iconSearch: {
        width: 60,
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderSearch: {
        fontSize: 16
    },
    scrollview_listFriend: {
        flex: 1,
    },
    listFriend: {
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listChat: {
        width: "100%",
        paddingLeft: 15
    },
})

