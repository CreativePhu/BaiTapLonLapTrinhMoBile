
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export function DoanChatFriend(props) {
    return (
        <TouchableOpacity style={styles.friend}>
            <View style={styles.avt_friend}>
                <Icon name="user" size={30} color="black" />
            </View>
            <Text style={styles.name_friend}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    friend: {
        overflow: 'hidden',
        width: 80,
        maxHeight: 100,
        // borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    avt_friend: {
        width: 55,
        height: 55,
        backgroundColor: "#f6f6f6",
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name_friend: {
        fontSize: 12,
        // borderWidth: 1,
        width: "100%",
        maxHeight: 40,
        overflow: 'hidden',
        paddingTop: 5
    },
})