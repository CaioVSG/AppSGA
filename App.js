import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Stacks/MainStack';
import StackLogado from './src/Stacks/StackLogado';
import 'react-native-gesture-handler';

export default function App1(){

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    
   

  );
} 

