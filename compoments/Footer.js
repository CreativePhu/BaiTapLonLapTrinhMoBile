
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function Footer({ navigation, type }) {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => { navigation.navigate('DoanChat') }} style={styles.page}>
                <Ionicons name="chatbubble-sharp" size={25} color={type === 1 ? "#7390F6" : "gray"} />
                <Text style={[styles.textPage, (type === 1) ? { color: "#7390F6" } : { color: "gray" }]}>Đoạn Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('CuocGoi') }} style={styles.page}>
                <Ionicons name="videocam" size={25} color={type === 2 ? "#7390F6" : "gray"} />
                <Text style={[styles.textPage, (type === 2) ? { color: "#7390F6" } : { color: "gray" }]}>Cuộc Gọi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('DanhBa') }} style={styles.page}>
                <FontAwesome5 name="user-friends" size={25} color={type === 3 ? "#7390F6" : "gray"} />
                <Text style={[styles.textPage, (type === 3) ? { color: "#7390F6" } : { color: "gray" }]}>Danh Bạ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Tin') }} style={styles.page}>
                <MaterialCommunityIcons name="newspaper-variant" size={25} color={type === 4 ? "#7390F6" : "gray"} />
                <Text style={[styles.textPage, (type === 4) ? { color: "#7390F6" } : { color: "gray" }]}>Tin Tức</Text>
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
    },
})