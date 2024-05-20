import axios from 'axios'

const IP = 'http://3.92.2.117:8080';

export const getCategories = ()=>{
    return{
        type : 'GET_CATEGORY',
        payload : axios.get(`${IP}/categories`)
    }
}

export const addCategories = (dataCategories)=>{
    return{
        type : 'ADD_CATEGORY',
        payload : axios.post(`${IP}/categories`,dataCategories)
    }
}

export const updateCategories = (id,dataCategories)=>{
    return{
        type : 'UPDATE_CATEGORY',
        payload : axios.patch(`${IP}/categories/` + id,dataCategories)
    }
}

export const deleteCategories = (id)=>{
    return{
        type : 'DELETE_CATEGORY',
        payload : axios.delete(`${IP}/categories/` + id)
    }
}
