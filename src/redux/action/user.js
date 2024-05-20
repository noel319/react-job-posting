import axios from 'axios'

const IP = 'http://3.92.2.117:8080';
export const getUser = ()=>{
    return{
        type : 'GET_USER',
        payload : axios.get(`${IP}/user`)
    }
}

export const addUser = (account)=>{
    return{
        type : 'ADD_USER',
        payload : axios.post(`${IP}/user/signup` ,account)
    }
}

export const updateUser = (id,dataUser)=>{
    return{
        type : 'UPDATE_USER',
        payload : axios.patch(`${IP}/user/` + id,dataUser)
    }
}

export const deleteUser = (id)=>{
    return{
        type : 'DELETE_USER',
        payload : axios.delete(`${IP}/user/` + id)
    }
}

export const loginUser = (email,password)=>{
    return{
        type : 'LOGIN_USER',
        payload : axios.post(`${IP}/user/login`, email,password)
    }
}