import {GET_JOB_REJECTED,GET_JOB_PENDING,GET_JOB_FULFILLED,ADD_JOB_FULFILLED
        ,ADD_JOB_REJECTED,ADD_JOB_PENDING,UPDATE_JOB_FULFILLED,
        UPDATE_JOB_PENDING,UPDATE_JOB_REJECTED, DELETE_JOB_PENDING, DELETE_JOB_REJECTED, DELETE_JOB_FULFILLED, GET_JOB_ORDER_PENDING, GET_JOB_ORDER_REJECTED, GET_JOB_ORDER_FULFILLED, GET_JOB_SEARCH_PENDING, GET_JOB_SEARCH_REJECTED, GET_JOB_SEARCH_FULFILLED} from './../constants/actiontypes'

const initialState = {
    isLoading : false,
    isError : false,
    data : [],
    next : '',
    prev : '',
}

const job = ( state = initialState, action) => {
    switch(action.type){
            case GET_JOB_PENDING:
               return{
                ...state,
                isLoading : true
            }

            case GET_JOB_REJECTED:
                return{
                    ...state,
                    isLoading: false,
                    isError : true
                }

            case GET_JOB_FULFILLED:
                return{
                    ...state,
                    isLoading: false,
                    isError : false,
                    data : action.payload.data.data,
                    next : action.payload.data.next,
                    prev : action.payload.data.prev
                }  

            case ADD_JOB_PENDING:
                return{
                    ...state,
                    isLoading : true
                }

            case ADD_JOB_REJECTED:
                return{
                    ...state,
                    isLoading : false,
                    isError : true
                }
                
            case ADD_JOB_FULFILLED:
                return{
                    ...state,
                    isLoading : false,
                    data : [...state.data,action.payload.data.data],
                    next : action.payload.data.next,
                    prev : action.payload.data.prev
                }
                
            case UPDATE_JOB_PENDING:
                return{
                    ...state,
                    isLoading : true
                }
                
            case UPDATE_JOB_REJECTED:
                return{
                    ...state,
                    isLoading : false,
                    isError : true
                }

            case UPDATE_JOB_FULFILLED:
                return{
                    ...state,
                    isLoading : false,
                    data : state.data.map(data => (data.id === action.payload.data.data.id) ?
                    action.payload.data.data : data),
                    next : action.payload.data.next,
                    prev : action.payload.data.prev
                }

            case DELETE_JOB_PENDING:
                return{
                    ...state,
                    isLoading : true
                }
                
            case DELETE_JOB_REJECTED:
                return{
                    ...state,
                    isLoading : false,
                    isError : true
                }    
            
            case DELETE_JOB_FULFILLED:
                return{
                    ...state,
                    data : state.data.filter(data => data.id !== action.payload.data.id),
                    isLoading : false,
                    next : action.payload.data.next,
                    prev : action.payload.data.prev
                }    

        default :
            return state
    }
}

export default job