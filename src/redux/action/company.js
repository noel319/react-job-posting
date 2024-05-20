import axios from 'axios'

const IP = 'http://3.92.2.117:8080';

export const getCompany = ()=>{
    return{
        type : 'GET_COMPANY',
        payload : axios.get(`${IP}/company`)
    }
}

export const addCompany = (dataCompany)=>{
    return{
        type : 'ADD_COMPANY',
        payload : axios.post(`${IP}/company`,dataCompany)
    }
}

export const updateCompany = (id,dataCompany)=>{
    return{
        type : 'UPDATE_COMPANY',
        payload : axios.patch(`${IP}/company/` + id,dataCompany)
    }
}

export const deleteCompany = (id)=>{
    return{
        type : 'DELETE_COMPANY',
        payload : axios.delete(`${IP}/company/` + id)
    }
}
