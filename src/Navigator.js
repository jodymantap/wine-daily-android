import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import React from 'react';
import Dashboard from "./pages/Dashboard";
import { View } from 'react-native';
import MainPage from './pages/MainPage';

const Stack = createStackNavigator();
const Navigator = () => {
    const {isLogin} = useSelector((state) => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                { !isLogin ? (
                <Stack.Screen name="WineDaily"
                              component={MainPage} 
                              options={{
                                title: 'WineDaily',
                                headerStyle: {
                                  backgroundColor: '#8A0014',
                                },
                                headerTintColor: '#FEA300',
                                headerTitleStyle: {
                                  fontWeight: 'bold',
                                },
                                headerShown: false
                }}/>
                ) : (
                <Stack.Screen name="Shopping List" component={Dashboard}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;