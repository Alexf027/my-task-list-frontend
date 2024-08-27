import axios from "axios";

const instancia1 = axios.create({
    baseURL: 'https://my-task-list-backend.onrender.com',
    withCredentials: true
});

const instancia2 = axios.create({
    baseURL: 'https://my-task-list-frontend.vercel.app/', 
    withCredentials: true
});

export { instancia1, instancia2 };