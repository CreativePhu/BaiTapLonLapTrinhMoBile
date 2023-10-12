
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export function Friend(props) {
    return (
        <TouchableOpacity style={styles.friend}>
            <View style={styles.avt_friend}>
                <Icon name="user" size={30} color="gray" />
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
        marginRight: 10
    },
    avt_friend: {
        width: 60,
        height: 60,
        backgroundColor: "#ccc",
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name_friend: {
        fontSize: 12,
    },
})