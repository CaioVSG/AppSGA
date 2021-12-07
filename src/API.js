import { Alert } from "react-native";
import axios from 'axios';
import api from "./Services/base_api";


export default {
    
    signIn: async (email, senha) => {
        useEffect(() => {
            api.post("http://185.28.23.76/login",{
                email: email,
                senha: senha
            }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return console.error("Ocorreu um erro" + error)
        });
        }, [])
            
    }

}