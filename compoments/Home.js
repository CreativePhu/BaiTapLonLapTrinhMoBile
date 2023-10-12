import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Styles/Home';
import { Footer } from './Footer';
import { Friend } from './Friend';
import { Chat } from './Chat';


export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.circle_header}>
                    <Icon name="bars" size={20} color="gray" />
                </TouchableOpacity>
                <View style={styles.cover_text_title_header}>
                    <Text style={styles.text_title_header}>Đoạn Chat</Text>
                </View>
                <TouchableOpacity style={styles.circle_header}>
                    <Icon name="pencil" size={20} color="gray" />
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                    </View>
                </ScrollView>
            </View>
            <Footer />
        </View>
    )
}

