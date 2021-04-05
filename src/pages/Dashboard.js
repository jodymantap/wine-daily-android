import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


function Dashboard() {
    const [todo, setTodo] = useState();
    const dispatch = useDispatch();
    const {data, isLogin, dataUser} = useSelector((state) => state.auth);
    const handleAddData = () => {
        const datas = {
            name: todo,
            id: Math.floor(Math.random()*100)
        }
        dispatch({type: "addData", payload: datas})
    }
    console.log(dataUser, isLogin);
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F6E8DF"}}>
        <Text style={{color: "#FE9790", fontSize: 30, fontWeight: "bold", marginBottom: 20}}>Welcome, {dataUser}</Text>
        {data.map((e, i) => (
            <Text style={{borderRadius: 30, backgroundColor: "#FE9790", padding: 8, color: "white", fontSize: 20, fontWeight: "300", marginBottom: 5}} key={i}>{e.todo}</Text>
        ))}
        <TextInput style={{fontSize: 20, borderColor: "#FE9790", borderWidth: 2, marginBottom: 10, borderRadius: 15, textAlign: "center", color: "#FE9790", width: 300, marginTop: 20}} placeholder="Mau belanja apa, bund?" value={todo} onChangeText={(text) => setTodo(text)}/>
        <TouchableOpacity style={{backgroundColor: "#FE9790", padding: 10, width: 300, alignItems: "center", borderRadius: 15}} onPress={handleAddData}>
          <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Add to List</Text>
        </TouchableOpacity>
      </View>
    )
}

export default Dashboard;
