import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigationState } from '@react-navigation/native';
import { ThemeContext } from '../../store/myStore';

export default function DrawerContent({ navigation }) {


    const navigationState = useNavigationState(state => state);
    const [currentTabRouteName, setCurrentTabRouteName] = React.useState("Đoạn chat")
    const namePage = navigationState?.routes[0].state?.routes[navigationState?.routes[0].state.index].name
    const { data, setData } = React.useContext(ThemeContext)
    const [checkLogout, setCheckLogout] = React.useState(false)

    React.useEffect(() => {
        if (namePage) {
            setCurrentTabRouteName(namePage)
        }
    }, [namePage])

    const [groups, setGroups] = React.useState([
        { name: "IT TUYỂN DỤNG - TÌM VIỆC LÀM", count: 1000, image: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/396722514_185485891277815_6225579132215858343_n.png?stp=c41.0.50.50a_cp0_dst-png_p50x50&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PR3pZdwrBukAX8gRvbh&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCDvuhHj0wdI0EAP45OoC4VrbHXaPHySII1OnaMACE_fw&oe=6564C75D" },
        { name: "GIẢI ĐỀ TOEIC 2023", count: 12000, image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/329549658_2468318956672524_6427325944667607830_n.png?stp=c23.0.50.50a_cp0_dst-png_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eNEJ-kIg7ysAX_CDdAU&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBuUzAJuXTSK6XIVkAVERnwUY6hLHANw8HB-jsjrLvSWA&oe=6565E862" },
        { name: "UI / UX DESIGNER & DEVELOPER", count: 1300, image: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/356241651_6592120824165027_8487120552825741457_n.png?stp=c66.0.50.50a_cp0_dst-png_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uKme6hze6lgAX_FI948&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDEo4VRc8lF_WAZmySAonyOQ3QSufvVSBpRO4SR4dELOg&oe=6565CE03" },
        { name: "CỘNG ĐỒNG FONT-END", count: 10300, image: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/279380050_136737985600025_6667832826954666998_n.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e90FU4B6m7cAX_3mirz&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBIzJUBDsJ3IzMk5k0g_AGzHd4ue_m6OaHw-o9sHopV5A&oe=6564BC64" },
    ])

    function logout() {
        navigation.navigate("FormLogin")
        setCheckLogout(false)
        setData({})
    }

    return (
        <View style={styles.container}>
            <View style={styles.accountSetting}>
                <View style={styles.account}>
                    <View style={styles.imgAccount}>
                        {/* <FontAwesome name="user" size={25} color="black" /> */}
                        <Image resizeMode='contain' style={{ width: "100%", height: "100%", borderRadius: 30 }} source={{ uri: data.image }} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { setCheckLogout(!checkLogout) }} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.nameAccount}>{data.name}</Text>
                            <FontAwesome name="angle-down" size={30} color="black" />
                        </TouchableOpacity>
                        {
                            checkLogout &&
                            <TouchableOpacity onPress={() => { logout() }}>
                                <Text style={{ fontSize: 12, color: "#00a8ff" }}>Đăng xuất</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
                <View style={styles.settingAccount}>
                    <Ionicons name="settings-sharp" size={20} color="black" />
                </View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Đoạn chat', { checkDrawer: "Đoạn chat" }) }}
                style={[styles.contentDrawer1, currentTabRouteName === "Đoạn chat" ? { backgroundColor: "rgb(239 239 239)" } : {}]}
            >
                <View style={styles.iconCententDrawer1}>
                    <Ionicons name="chatbubble-sharp" size={25} color="black" />
                </View>
                <Text style={styles.textAccountDrawer1}>Đoạn chat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("TinNhanDangCho") }}
                style={[styles.contentDrawer1, currentTabRouteName === "TinNhanDangCho" ? { backgroundColor: "rgb(239 239 239)" } : {}]}
            >
                <View style={styles.iconCententDrawer1}>
                    <Ionicons name="chatbubble-ellipses-sharp" size={25} color="black" />
                </View>
                <Text style={styles.textAccountDrawer1}>Tin nhắn đang chờ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Marketplace") }}
                style={[styles.contentDrawer1, currentTabRouteName === "Marketplace" ? { backgroundColor: "rgb(239 239 239)" } : {}]}
            >
                <View style={styles.iconCententDrawer1}>
                    <MaterialIcons name="store" size={25} color="black" />
                </View>
                <Text style={styles.textAccountDrawer1}>Marketplace</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("KhoLuuTru") }}
                style={[styles.contentDrawer1, currentTabRouteName === "KhoLuuTru" ? { backgroundColor: "rgb(239 239 239)" } : {}]}
            >
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
                                    {/* <FontAwesome name="user" size={25} color="black" /> */}
                                    <Image resizeMode='contain' style={{ width: "100%", height: "100%", borderRadius: 5 }} source={{ uri: item.image }} />
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
        // borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameAccount: {
        marginLeft: 15,
        marginRight: 5,
        fontSize: 16,
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