
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.page}>
                <Icon name="user" size={40} color="gray" />
                <Text style={styles.textPage}>Đoạn Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.page}>
                <Icon name="video-camera" size={40} color="gray" />
                <Text style={styles.textPage}>Cuộc Gọi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.page}>
                <Icon name="users" size={40} color="gray" />
                <Text style={styles.textPage}>Danh Bạ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.page}>
                <Icon name="newspaper-o" size={40} color="gray" />
                <Text style={styles.textPage}>Tin Tức</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
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