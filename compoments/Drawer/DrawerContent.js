import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigationState } from '@react-navigation/native';

export function DrawerContent({ navigation }) {

    const navigationState = useNavigationState(state => state);
    const [currentTabRouteName, setCurrentTabRouteName] = React.useState("Đoạn chat")
    const namePage = navigationState?.routes[0].state?.routes[navigationState?.routes[0].state.index].name

    React.useEffect(() => {
        if (namePage) {
            setCurrentTabRouteName(namePage)
        }
    }, [namePage])

    const [groups, setGroups] = React.useState([
        { name: "IT TUYỂN DỤNG - TÌM VIỆC LÀM", count: 1000 },
        { name: "GIẢI ĐỀ TOEIC 2023", count: 12000 },
        { name: "UI / UX DESIGNER & DEVELOPER", count: 1300 },
        { name: "CỘNG ĐỒNG FONT-END", count: 10300 },
    ])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.accountSetting}>
                <View style={styles.account}>
                    <View style={styles.imgAccount}>
                        <FontAwesome name="user" size={25} color="black" />
                    </View>
                    <Text style={styles.nameAccount}>Thiên Phú</Text>
                    <FontAwesome name="angle-down" size={30} color="black" />
                </View>
                <View style={styles.settingAccount}>
                    <Ionicons name="settings-sharp" size={20} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Đoạn chat', { checkDrawer: "Đoạn chat" }) }}
                style={[styles.contentDrawer1, currentTabRouteName === "Đoạn chat" ? { backgroundColor: "rgb(239 239 239)" } : {}]}
            >
                <View style={styles.iconCententDrawer1}>
                    <Ionicons name="chatbubble-sharp" size={25} color="black" />
                </View>
                <Text style={styles.textAccountDrawer1}>Đoạn chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentDrawer1}>
                <View style={styles.iconCententDrawer1}>
                    <Ionicons name="chatbubble-ellipses-sharp" size={25} color="black" />
                </View>
                <Text style={styles.textAccountDrawer1}>Tin nhắn đang chờ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentDrawer1}>
                <View style={styles.iconCententDrawer1}>
                    <MaterialIcons name="store" size={25} color="black" />
                </View>
                <Text style={styles.textAccountDrawer1}>Marketplace</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentDrawer1}>
                <View style={styles.iconCententDrawer1}>
                    <FontAwesome5 name="warehouse" size={15} color="black" />
                </View>
                <Text style={styles.textAccountDrawer1}>Kho lưu trữ</Text>
            </TouchableOpacity>
            <View style={styles.lableGroup}>
                <Text style={styles.titleGroup1}>Cộng đồng</Text>
                <TouchableOpacity style={styles.coverTitleGroup2}>
                    <Text style={styles.titleGroup2}>
                        CHỈNH SỬA
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listGroup}>
                {
                    groups.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.group}>
                                <View style={styles.imgGroup}>
                                    <FontAwesome name="user" size={25} color="black" />
                                </View>
                                <View style={styles.detailContentGroup}>
                                    <Text style={styles.nameGroup}>{item.name}</Text>
                                    <Text style={styles.countPeopleGroup}>{item.count} đang hoạt động</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
        alignItems: 'center',
    },
    accountSetting: {
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    account: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgAccount: {
        width: 35,
        height: 35,
        backgroundColor: "#f6f6f6",
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameAccount: {
        marginLeft: 15,
        marginRight: 5,
        fontSize: 14,
    },
    settingAccount: {
        // demo
    },
    contentDrawer1: {
        width: "94%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8,
        borderRadius: 15,
        // borderWidth: 1
    },
    iconCententDrawer1: {
        width: 35,
        height: 35,
        backgroundColor: "rgb(221 221 221)",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textAccountDrawer1: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 15,
    },
    lableGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "90%",
        marginTop: 15,
        marginBottom: 15,
    },
    titleGroup1: {
        fontSize: 12,
        fontWeight: '700',
        color: "#ccc"
    },
    coverTitleGroup2: {

    },
    titleGroup2: {
        fontSize: 14,
        fontWeight: '700',
        color: "rgb(0 122 255)"
    },
    listGroup: {
        alignItems: 'center',
        width: "100%"
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "90%",
        overflow: 'hidden',
        marginBottom: 20
    },
    imgGroup: {
        width: 35,
        height: 35,
        backgroundColor: "rgb(221 221 221)",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailContentGroup: {
        marginLeft: 10,
    },
    nameGroup: {
        fontSize: 14,
        fontWeight: '400',
    },
    countPeopleGroup: {
        fontSize: 12,
        color: "#ccc",
    },
})