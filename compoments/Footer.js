
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export function Footer({ navigation }) {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => { navigation.navigate('Đoạn Chat') }} style={styles.page}>
                <Icon name="user" size={35} color="gray" />
                <Text style={styles.textPage}>Đoạn Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Cuộc Gọi') }} style={styles.page}>
                <Icon name="video-camera" size={35} color="gray" />
                <Text style={styles.textPage}>Cuộc Gọi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Danh Bạ') }} style={styles.page}>
                <Icon name="users" size={35} color="gray" />
                <Text style={styles.textPage}>Danh Bạ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Tin') }} style={styles.page}>
                <Icon name="newspaper-o" size={35} color="gray" />
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