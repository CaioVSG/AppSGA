import axios from 'axios';

const base_api = axios.create({
    baseURL: "http://185.28.23.76/login",
});

export default base_api;