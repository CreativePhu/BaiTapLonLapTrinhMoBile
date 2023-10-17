import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DoanChatFriend } from './DoanChatFriend';
import { Chat } from './DoanChat_Chat';

export function DoanChatCenter() {
    return (
        <View style={styles.contentCenter}>
            <TouchableOpacity style={styles.search}>
                <View style={styles.cover_iconSearch}>
                    <Icon name="search" size={20} color="black" />
                </View>
                <Text style={styles.placeholderSearch}>Tìm Kiếm</Text>
            </TouchableOpacity>
            <View style={styles.listFriend}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollview_listFriend}>
                    <DoanChatFriend name={"Ngô Thị Diễm Quỳnh"} />
                    <DoanChatFriend name={"Ngô Thị Diễm Quỳnh"} />
                    <DoanChatFriend name={"Ngô Thị Diễm Quỳnh"} />
                    <DoanChatFriend name={"Ngô Thị Diễm Quỳnh"} />
                    <DoanChatFriend name={"Ngô Thị Diễm Quỳnh"} />
                    <DoanChatFriend name={"Ngô Thị Diễm Quỳnh"} />
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
    )
}

const styles = StyleSheet.create({
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