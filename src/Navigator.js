import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import React from 'react';
import Dashboard from './pages/Dashboard';
import MainPage from './pages/MainPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Navigator = () => {
  const {isLogin} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="myNavigator" component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const detailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="detail" component={Dashboard} />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="detailStack" component={detailStack} />
    </Tab.Navigator>
  );
}