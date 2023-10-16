
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

export function Footer({ navigation, type }) {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => { navigation.navigate('Đoạn Chat') }} style={styles.page}>
                <Icon1 name="chat" size={35} color={type === 1 ? "#7390F6" : "gray"} />
                <Text style={[styles.textPage, (type === 1) ? { color: "#7390F6" } : { color: "black" }]}>Đoạn Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Cuộc Gọi') }} style={styles.page}>
                <Icon name="video-camera" size={35} color={type === 2 ? "#7390F6" : "gray"} />
                <Text style={[styles.textPage, (type === 2) ? { color: "#7390F6" } : { color: "black" }]}>Cuộc Gọi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Danh Bạ') }} style={styles.page}>
                <Icon name="users" size={35} color={type === 3 ? "#7390F6" : "gray"} />
                <Text style={[styles.textPage, (type === 3) ? { color: "#7390F6" } : { color: "black" }]}>Danh Bạ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Tin') }} style={styles.page}>
                <Icon name="newspaper-o" size={35} color={type === 4 ? "#7390F6" : "gray"} />
                <Text style={[styles.textPage, (type === 4) ? { color: "#7390F6" } : { color: "black" }]}>Tin Tức</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    page: {
        display: 'flex',
        alignItems: 'center'
    },
    textPage: {
        fontSize: 14,
        // color: "#ccc"
    },
})