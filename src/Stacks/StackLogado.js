import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaHome from '../Screens/TelaHome';
import TelaFoto from '../Screens/TelaFoto';
import TelaLogin from '../Screens/TelaLogin';
const Stack = createStackNavigator();

export default() => (
    <Stack.Navigator
      initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={TelaHome}
      />
    <Stack.Screen
      name="TelaFoto"
      component={TelaFoto}
    />
    </Stack.Navigator>
);