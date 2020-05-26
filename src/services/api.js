
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.5:8383',
});

export default api;