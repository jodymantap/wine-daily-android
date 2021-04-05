import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import React from 'react';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const Stack = createStackNavigator();
const Navigator = () => {
    const {isLogin} = useSelector((state) => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                { !isLogin ? (
                <Stack.Screen name="Login" component={Login}/>
                ) : (
                <Stack.Screen name="Shopping List" component={Dashboard}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;