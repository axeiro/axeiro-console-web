import axios from "axios";

const api = axios.create({
    baseURL:import.meta.env.VITE_DEPLOYMENT_SERVICE_BASE_URL,
    withCredentials:true
})

