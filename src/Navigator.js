import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import React from 'react';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { View } from 'react-native';

const Stack = createStackNavigator();
const Navigator = () => {
    const {isLogin} = useSelector((state) => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                { !isLogin ? (
                <Stack.Screen name="WineDaily"
                              component={Login} 
                              options={{
                                title: 'WineDaily',
                                headerStyle: {
                                  backgroundColor: '#8A0014',
                                },
                                headerTintColor: '#FEA300',
                                headerTitleStyle: {
                                  fontWeight: 'bold',
                                },
                }}/>
                ) : (
                <Stack.Screen name="Shopping List" component={Dashboard}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;