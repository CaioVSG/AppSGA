/*import axios from 'axios'
import API from '../API'
import base_api from './api'

export default {
    cadastro: async (email,senha) =>{

        return axios({
            url: base_api,
            method: "POST",
            timeout: 5000,
            data: {
                email: email,
                senha: senha
            },
            headers: {
                Accept: 'application/json'
            }


        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    
    }

}

*/