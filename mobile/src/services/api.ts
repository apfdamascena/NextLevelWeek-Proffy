import axios from 'axios';

const API = axios.create({
    baseURL: 'http://192.168.1.9:2608'
});

export default API;