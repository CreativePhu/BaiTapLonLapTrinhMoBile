import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export function DanhBaCenter() {
    const [data, setData] = React.useState([
        { id: 1, name: "Triều Nguyễn", status: "Đã chia sẻ bài viết của Quỳnh Như - Hôm Qua", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4FtESFKahWDRVuWJcim_MsGi2BRkr4Irrg&usqp=CAU" },
        { id: 2, name: "Triều Nguyễn", status: "Đã chia sẻ bài viết của Quỳnh Như - Hôm Qua", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nji70n0nKnujZh_As_Klbd6AKI9a9vl4Ag&usqp=CAU" },
        { id: 3, name: "Triều Nguyễn", status: "Đã chia sẻ bài viết của Quỳnh Như - Hôm Qua", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-0AK3ZTUch9s9aq9aO6ZGIN3Ra2kh76Xwg&usqp=CAU" },
        { id: 4, name: "Triều Nguyễn", status: "Đã chia sẻ bài viết của Quỳnh Như - Hôm Qua", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNH5wMlxFJMaajQrj3RntYw6Tbu0WCZP5zJw&usqp=CAU" },
        { id: 5, name: "Triều Nguyễn", status: "Đã chia sẻ bài viết của Quỳnh Như - Hôm Qua", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqJraJeBOqnjwLeYic9XWEo5hbHDkhlWzbieTrGtD6-lAqjsPT6cyT8Eiax9rVs2UiWg&usqp=CAU" },
        { id: 6, name: "Triều Nguyễn", status: "Đã chia sẻ bài viết của Quỳnh Như - Hôm Qua", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzU6LqBst01lOFoQywumJh1CJUXk0Rb8qCHxMkcUAr3j1PF-866EAcWIp_WTpASiA59U&usqp=CAU" },
    ])
    return (
        <View style={styles.contentCenter}>
            <View style={styles.titleCenter}>
                <Text style={styles.titleLeft}>Thông tin mới từ FaceBook (3)</Text>
                <TouchableOpacity>
                    <Text style={styles.titleRight}>XEM TẤT CẢ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContent}>
                {
                    data.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={styles.itemListContent}>
                                <View style={styles.imgListContent}>
                                    <Image resizeMode='contain' style={{ width: "100%", height: "100%", borderRadius: 20 }} source={{ uri: item.image }} />
                                </View>
                                <View style={styles.coverDetailListContent}>
                                    <Text style={styles.textListContent1}>{item.name}</Text>
                                    <Text style={styles.textListContent2}>{item.status}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.titleCenter}>
                <Text style={styles.titleLeft}>Đoạn chat trong cộng đồng của bạn</Text>
                <TouchableOpacity>
                    <Text style={styles.titleRight}>XEM TẤT CẢ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContent1}>
                {
                    data.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={styles.itemListContent}>
                                <View style={styles.imgListContent1}>
                                    <View style={styles.imgListContent1_big}>
                                        <Image resizeMode='contain' style={{ width: "100%", height: "100%", borderRadius: 5 }} source={{ uri: item.image }} />
                                    </View>
                                    <View style={styles.imgListContent1_small}>
                                        <Image resizeMode='contain' style={{ width: "100%", height: "100%", borderRadius: 20 }} source={{ uri: item.image }} />
                                    </View>
                                </View>
                                <View style={styles.coverDetailListContent}>
                                    <Text style={styles.textListContent1}>{item.name}</Text>
                                    <Text style={styles.textListContent2}>{item.status}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.titleCenter}>
                <Text style={styles.titleLeft}>Đang hoạt động (5)</Text>
            </View>
            <View style={styles.listContent2}>
                {
                    data.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={styles.itemListContent}>
                                <View style={styles.imgListContent2}>
                                    <View style={styles.onlineSmall}>
                                        <Image resizeMode='contain' style={{ width: "100%", height: "100%", borderRadius: 5 }} source={{ uri: item.image }} />
                                    </View>
                                </View>
                                <View style={styles.coverDetailListContent}>
                                    <Text style={styles.textListContent1}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentCenter: {
        flex: 1,
        // borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    titleCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
    },
    titleLeft: {
        fontSize: 14,
        fontWeight: '700',
        color: "#ccc"
    },
    titleRight: {
        fontSize: 16,
        fontWeight: '700',
        color: "rgb(0 122 255)"
    },
    // listContent: {
    //     overflow: 'hidden',
    // },
    // listContent1: {
    //     overflow: 'hidden',
    // },
    // listContent2: {
    //     overflow: 'hidden',
    // },
    itemListContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 15,
    },
    imgListContent: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#ccc",
    },
    coverDetailListContent: {
        marginLeft: 10
    },
    textListContent1: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5,
    },
    textListContent2: {
        fontSize: 12,
        fontWeight: '600',
        color: "#ccc"
    },
    imgListContent1: {
        width: 40,
        height: 40,
        // backgroundColor: "#ccc",
        position: 'relative',
    },
    imgListContent1_big: {
        width: 35,
        height: 35,
        // borderWidth: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: "#ccc",
        borderRadius: 10,
    },
    imgListContent1_small: {
        width: 25,
        height: 25,
        borderWidth: 3,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1,
        borderRadius: 20,
        backgroundColor: "#ccc",
        borderColor: "#fff",
    },
    imgListContent2: {
        width: 40,
        height: 40,
        backgroundColor: "#ccc",
        borderRadius: 30,
        position: 'relative',
    },
})