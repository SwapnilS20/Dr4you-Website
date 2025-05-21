import axios from 'axios';

const API = axios.create({
    baseURL:`${import.meta.env.VITE_BACKEND_URL}/api/header`,
    withCredentials : true,
})

export const viewHeader = async ()=> API.get('/view');
export const headerImageUrl = `${import.meta.env.VITE_BACKEND_URL}/uploads/Header/`;