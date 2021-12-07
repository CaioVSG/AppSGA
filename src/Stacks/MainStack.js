import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from '../Screens/TelaLogin';
const Stack = createStackNavigator();

export default() => (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown:false
      }}>
    <Stack.Screen
      name="Login" 
      component={TelaLogin}
      />
    </Stack.Navigator>
);
