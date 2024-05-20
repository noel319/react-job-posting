import { GET_COMPANY_PENDING, GET_COMPANY_REJECTED, 
    GET_COMPANY_FULFILLED, ADD_COMPANY_PENDING, ADD_COMPANY_REJECTED, 
    ADD_COMPANY_FULFILLED, DELETE_JOB_PENDING, DELETE_JOB_REJECTED, DELETE_JOB_FULFILLED, 
    UPDATE_COMPANY_PENDING, UPDATE_COMPANY_REJECTED, UPDATE_COMPANY_FULFILLED, DELETE_COMPANY_PENDING, DELETE_COMPANY_REJECTED, DELETE_COMPANY_FULFILLED } from './../constants/actiontypes'


const initialState = {
    isLoading : false,
    isError : false,
    data : []
}
 
const company = ( state = initialState, action) => {
    switch(action.type){
        case GET_COMPANY_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case GET_COMPANY_REJECTED:
                return{
                    ...state,
                    isLoading: false,
                    isError : true
                }
            case GET_COMPANY_FULFILLED:
                return{
                    ...state,
                    isLoading: false,
                    isError : false,
                    data : action.payload.data.data
                } 

            case ADD_COMPANY_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case ADD_COMPANY_REJECTED:
                return{
                    isLoading: false,
                    isError : true
                }
            case ADD_COMPANY_FULFILLED:
                return{
                    isLoading: false,
                    isError : false,
                    data : [...state.data,action.payload.data]
                } 

            case UPDATE_COMPANY_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case UPDATE_COMPANY_REJECTED:
                return{
                    isLoading: false,
                    isError : true
                }
            case UPDATE_COMPANY_FULFILLED:
                return{
                    isLoading: false,
                    isError : false,
                    data : state.data.map(data => (data.id === action.payload.data.data.id) ?
                    action.payload.data : data)
                } 
                
            case DELETE_COMPANY_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case DELETE_COMPANY_REJECTED:
                return{
                    isLoading: false,
                    isError : true
                }
            case DELETE_COMPANY_FULFILLED:
                return{
                    ...state,
                    isLoading: false,
                    isError : false,
                    data : state.data.filter(data => data.id !== action.payload.data.id)
                } 
        default :
            return state
    }
}

export default company