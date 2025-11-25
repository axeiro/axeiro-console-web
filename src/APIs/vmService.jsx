import axios from "axios";

const api = axios.create({
    baseURL:import.meta.env.VITE_VM_SERVICE_BASE_URL,
    withCredentials:true
})

export const createVm = async()=>{
    try {
        const rsp = await api.post('/api/create')
    console.log(rsp);
    } catch (error) {
        console.log(error);
        
    }
    
}