import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ShopSvg from "../assets/svg/shop.svg";

function Login() {
    const [username, setUsername] = useState();
    const dispatch = useDispatch()
    const {data, isLogin} = useSelector((state) => state.auth);
    const handleSubmit = () => {
        dispatch({type: "login", payload: username})
    }
    console.log(isLogin)
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F6E8DF"}}>
        <Text style={{color: "#FE9790", fontSize: 30, fontWeight: "bold", marginBottom: 30}}>Shopping List</Text>
        <TextInput value={username} onChangeText={(text) => setUsername(text)} style={{fontSize: 20, borderColor: "#FE9790", borderWidth: 2, marginBottom: 10, borderRadius: 15, textAlign: "center", color: "#FE9790", width: 300}} placeholder="Enter your name"></TextInput>
        <TouchableOpacity style={{backgroundColor: "#FE9790", padding: 10, width: 300, alignItems: "center", borderRadius: 15}} onPress={handleSubmit}>
          <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
}

export default Login;
