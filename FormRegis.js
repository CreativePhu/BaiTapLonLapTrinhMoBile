import React from 'react'
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from '@react-navigation/native';


export function FormRegis({ navigation }) {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [againPassword, setAgainPassword] = React.useState("")
    const [name, setName] = React.useState("")
    const [image, setImage] = React.useState(null)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            ressetData()
        }, [])
    );

    function ressetData() {
        setUsername("")
        setPassword("")
        setAgainPassword("")
        setName("")
        setImage(null)
    }

    function Regis() {
        if (username && password && againPassword && name && (password === againPassword)) {
            let promise = new Promise(
                function (resole) {
                    fetch(image)
                        .then((response) => response.blob())
                        .then((blob) => {
                            const reader = new FileReader();
                            reader.onload = () => {
                                const base64String = reader.result.split(',')[1];
                                resole("data:image/jpeg;base64," + base64String)
                            };
                            reader.readAsDataURL(blob);
                        })
                        .catch((error) => console.log('Error reading file:', error));
                }
            )

            promise
                .then((data) => {
                    const url = "http://10.0.2.2:8080/v1/users/addUser"
                    const account = { username: username, password: password, image: data, name: name }
                    fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(account)
                    })
                        .then((result) => {
                            if (result.ok) {
                                alert("Tạo tài khoản thành công")
                                navigation.navigate("FormLogin")
                                ressetData()
                            } else {
                                alert("Tạo tài khoản thất bại")
                            }
                        })
                })

        } else {
            alert("Vui lòng nhập đủ thông tin chính xác")
        }

    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "",
            headerLeft: () => {
                return (
                    <View style={{ marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate("FormLogin"), ressetData() }}>
                                <FontAwesome5 name="arrow-left" size={20} color={"black"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            },
        })
    })

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Đăng kí</Text>
            <View style={{ width: "100%", paddingLeft: 50, paddingRight: 50, marginBottom: 20 }}>
                <TextInput value={username} onChangeText={setUsername} style={{ fontSize: 16, padding: 10, borderBottomWidth: 1 }} placeholder='Tên tài khoản...' />
            </View>
            <View style={{ width: "100%", paddingLeft: 50, paddingRight: 50, marginBottom: 20 }}>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry
                    enablesReturnKeyAutomatically
                    style={{ fontSize: 16, padding: 10, borderBottomWidth: 1 }}
                    placeholder='Mật khẩu...'
                />
            </View>
            <View style={{ width: "100%", paddingLeft: 50, paddingRight: 50, marginBottom: 20 }}>
                <TextInput
                    value={againPassword}
                    onChangeText={setAgainPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry
                    enablesReturnKeyAutomatically
                    style={{ fontSize: 16, padding: 10, borderBottomWidth: 1 }}
                    placeholder='Nhập lại mật khẩu...'
                />
            </View>
            <View style={{ width: "100%", paddingLeft: 60, paddingRight: 50, marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Ảnh đại diện:</Text>
                <TouchableOpacity onPress={pickImage} style={{ width: 100, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 15, backgroundColor: "#6c5ce7" }}>
                    <Text style={{ color: "#ffffff" }}>Chọn ảnh</Text>
                </TouchableOpacity>
                {
                    image &&
                    <View style={{ marginLeft: 15 }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 30 }} source={{ uri: image }} />
                    </View>
                }
            </View>
            <View style={{ width: "100%", paddingLeft: 50, paddingRight: 50, marginBottom: 20 }}>
                <TextInput value={name} onChangeText={setName} style={{ fontSize: 16, padding: 10, borderBottomWidth: 1 }} placeholder='Tên của bạn...' />
            </View>
            <View style={{ width: "100%", marginTop: 20 }}>
                <TouchableOpacity onPress={() => { Regis() }} style={{ borderWidth: 1, marginLeft: 50, marginRight: 50, padding: 10, borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>Đăng kí</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}