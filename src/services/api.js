import axios from 'axios';

const api = axios.create({
    baseURL: "https://randomuser.me/api/?results=10"
});

export default api;