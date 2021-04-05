import React from 'react';
import { View, Text } from 'react-native';
import Navigator from './src/Navigator';
import { Provider } from 'react-redux'; 
import Store from './src/redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <Navigator/>
    </Provider>
  )
}

export default App
