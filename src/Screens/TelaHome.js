import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import { estilos } from './Styles';

 const TelaHome = () =>{
   navigation = useNavigation();

   const handleLogout = () => {
    navigation.reset({
      routes: [{ name: 'StackLogado' }]
  });
  }
    return(
    
      <View style={estilos.container}>
        <TouchableOpacity style={estilos.button} onPress={()=>navigation.navigate('TelaFoto')}>
          <Text>TIRAR FOTO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={handleLogout}>
        <Text>RETORNAR</Text>
      </TouchableOpacity>
      </View>
    )
  }

  export default TelaHome;