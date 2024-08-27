import axios from "axios";

const instancia1 = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const instancia2 = axios.create({
    baseURL: 'http://localhost:5173', 
    withCredentials: true
});

export { instancia1, instancia2 };