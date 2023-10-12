
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#fff"
    },
    header: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    circle_header: {
        width: 50,
        height: 50,
        backgroundColor: "#ccc",
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cover_text_title_header: {
        width: 250,
    },
    text_title_header: {
        fontSize: 25,
        fontWeight: '700'
    },
    center: {
        backgroundColor: "#fff",
        padding: 10,
        overflow: 'hidden',
        height: 550
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        backgroundColor: "#CCC",
        borderRadius: 20,
        height: 45,
        minHeight: 45
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
        backgroundColor: "#fff"
    },
})