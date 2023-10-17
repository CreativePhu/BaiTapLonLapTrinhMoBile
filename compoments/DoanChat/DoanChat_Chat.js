
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export function Chat(props) {
    return (
        <TouchableOpacity style={styles.chat}>
            <View style={styles.imgChat}>
                <Icon name="user" size={30} color="black" />
            </View>
            <View style={styles.titleChat}>
                <Text style={styles.nameChat}>{props.name}</Text>
                <Text style={styles.contentChat}>{props.contentChat}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    chat: {
        // borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 15
    },
    imgChat: {
        width: 55,
        height: 55,
        borderRadius: 60,
        backgroundColor: "#ccc",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleChat: {
        marginLeft: 10
    },
    nameChat: {
        fontSize: 18,
        marginBottom: 5
    },
    contentChat: {
        fontSize: 14,
    },
})