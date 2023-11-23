import React from 'react'
import { Keyboard } from 'react-native'
import { TextInput } from 'react-native'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../store/myStore'
import { useFocusEffect } from '@react-navigation/native';

export function FormLogin({ navigation }) {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const { data, setData } = React.useContext(ThemeContext)

    useFocusEffect(
        React.useCallback(() => {
            setUsername("")
            setPassword("")
        }, [])
    );

    function login() {
        if (username && password) {
            let account = { username: username, password: password }
            const url = "http://10.0.2.2:8080/v1/check_account"
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(account)
            })
                .then((result) => {
                    if (result.ok) {
                        const url = "http://10.0.2.2:8080/v1/users/username/" + username
                        fetch(url, {
                            method: "GET"
                        })
                            .then(datafetch => datafetch.json())
                            .then((result) => {
                                setData(result)
                                navigation.navigate("MyFooter")
                                Keyboard.dismiss()
                            })
                            .catch(() => {
                                alert("Không thể lấy dữ liệu người dùng !")
                                setUsername("")
                                setPassword("")
                            })
                    } else {
                        alert("Đăng nhập thất bại !")
                        setUsername("")
                        setPassword("")
                    }
                })
                .catch((error) => {
                    alert("Đăng nhập thất bại !")
                    setUsername("")
                    setPassword("")
                });
        } else {
            alert("Tài khoản hoặc mật khẩu không được để trống !")
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#ffffff" }}>
            <View style={{ width: 250, height: 250 }}>
                <Image style={{ width: "100%", height: "100%" }} source={require("../image/messenger.png")} />
            </View>
            <View style={{ width: "100%", paddingLeft: 50, paddingRight: 50, marginBottom: 20 }}>
                <TextInput value={username} onChangeText={setUsername} style={{ fontSize: 16, padding: 10, borderBottomWidth: 1 }} placeholder='Tài khoản...' />
            </View>
            <View style={{ width: "100%", paddingLeft: 50, paddingRight: 50, marginBottom: 20 }}>
                <TextInput
                    value={password}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry
                    enablesReturnKeyAutomatically
                    onChangeText={setPassword}
                    style={{ fontSize: 16, padding: 10, borderBottomWidth: 1 }}
                    placeholder='Mật khẩu...'
                />
            </View>
            <View style={{ width: "100%", marginTop: 20 }}>
                <TouchableOpacity onPress={() => { login() }} style={{ borderWidth: 1, marginLeft: 50, marginRight: 50, padding: 10, borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>Đăng Nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Chưa có tài khoản </Text>
                <TouchableOpacity onPress={() => { navigation.navigate("FormRegis") }}>
                    <Text style={{ fontWeight: 'bold', color: "blue" }}>đăng kí</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}