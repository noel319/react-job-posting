import axios from 'axios'

const IP = 'http://3.92.2.117:8080';

export const getJob = (query)=>{
    return{
        type : 'GET_JOB',
        payload : axios.get(`${IP}/job?page=`+query)
    }
}

export const getJobId = (id)=>{
    return{
        type : 'GET_JOB',
        payload : axios.get(`${IP}/job/`+id)
    }
}

export const getJobSearch = (name,company)=>{
    return{
        type : 'GET_JOB',
        payload : axios.get(`${IP}/job?name=`+ name +'&company='+ company)
    }
}

export const getJobOrderBy = (query)=>{
    return{
        type : 'GET_JOB',
        payload : axios.get(`${IP}/job?orderby=`+ query)
    }
}

export const addJob = (dataJob)=>{
    return{
        type : 'ADD_JOB',
        payload : axios.post(`${IP}/job`,dataJob)
    }
}

export const updateJob = (id,dataJob)=>{
    return{
        type : 'UPDATE_JOB',
        payload : axios.patch(`${IP}/job/${id}`, dataJob)
    }
}

export const deleteJob = (id)=>{
    return{
        type : 'DELETE_JOB',
        payload : axios.delete(`${IP}/job/` + id)
    }
}
