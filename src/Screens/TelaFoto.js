import React, { useState } from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import { estilos } from './Styles';
import ImagePicker from 'react-native-image-crop-picker';
import getRealm from '../Services/Realm';
import { useNavigation } from '@react-navigation/native';

const TelaFoto = () =>{
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          compressImageMaxWidth: 300,
          compressImageMaxHeight: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }

     

      return(
          <View style={estilos.container}>
            <TouchableOpacity style={estilos.button} onPress={takePhotoFromCamera}>
                <Text>USAR CAMERA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.button} onPress={choosePhotoFromLibrary}>
                <Text>GALERIA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.button} onPress={()=>navigation.goBack()}>
                <Text>RETORNAR</Text>
            </TouchableOpacity>
          </View>
      )
}

export default TelaFoto;