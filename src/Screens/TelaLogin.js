import React, { useState } from 'react';
import {Text,View,TextInput, TouchableOpacity,Image,Alert} from 'react-native';
import { estilos } from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native'
import API from '../API';
import UserServices from '../Services/UserServices';


 const TelaLogin = () =>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const netInfo = useNetInfo();

    const handleSignClick = async () => {
      setLoading(true);
      if (email != '' && senha != '') {
          if (netInfo.isConnected) {
            
              API.signIn(email.toLowerCase, senha).then((response => {
                setLoading(false);
                   navigation.reset({
                       routes: [{ name: 'StackLogado' }]
                });
              })).catch((error) => {
                  setLoading(false);
                  Alert.alert("Atenção!","Email ou senha incorreto!");
              })
            
            } else {
                setLoading(false);
                Alert.alert(
                    'Atenção!',
                    'Verifique sua conexão e tente novamente!',
                    [
                        {
                            text: 'Fechar',
                            style: 'cancel'
                        },
                    ],
                    { cancelable: false }
                );
            }
        } else {
            setLoading(false);
            Alert.alert(
                'Atenção!',
                'Preencha os campos e tente novamente!',
                [
                    {
                        text: 'Fechar',
                        style: 'cancel'
                    },
                ],
                { cancelable: false }
            );
        }
    }
    
  
    return(
      <View style={estilos.container}>
    <Image style={estilos.image} source={require('../Assets/logo.png')}/>
      <TextInput placeholder="Email" placeholderTextColor="white" style={estilos.input} onChangeText={text=>setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder="Senha" placeholderTextColor="white"  style={estilos.input} onChangeText={text=>setSenha(text)} />

      <TouchableOpacity style={estilos.button} onPress={handleSignClick}>
        <Text>ENTRAR</Text>
      </TouchableOpacity>
    </View>

    )
 }
  export default TelaLogin;