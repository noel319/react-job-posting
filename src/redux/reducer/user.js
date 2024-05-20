import { GET_USER_PENDING, GET_USER_REJECTED, GET_USER_FULFILLED,
     ADD_USER_PENDING, ADD_USER_REJECTED, ADD_USER_FULFILLED, UPDATE_USER_PENDING, UPDATE_USER_REJECTED, UPDATE_USER_FULFILLED, DELETE_USER_PENDING, DELETE_USER_REJECTED, DELETE_USER_FULFILLED, LOGIN_USER_PENDING, LOGIN_USER_REJECTED, LOGIN_USER_FULFILLED } from './../constants/actiontypes'

const initialState = {
    isLoading : false,
    isError : false,
    data : []
}

const user = ( state = initialState, action) => {
    switch(action.type){
        case GET_USER_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case GET_USER_REJECTED:
                return{
                    ...state,
                    isLoading: false,
                    isError : true
                }
            case GET_USER_FULFILLED:
                return{
                    ...state,
                    isLoading: false,
                    isError : false,
                    data : action.payload.data
                } 

            case ADD_USER_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case ADD_USER_REJECTED:
                return{
                    ...state,
                    isLoading: false,
                    isError : true
                }
            case ADD_USER_FULFILLED:
                return{
                    ...state,
                    isLoading: false,
                    isError : false,
                    data : [...state.data,action.payload.data.data]
                } 

            case UPDATE_USER_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case UPDATE_USER_REJECTED:
                return{
                    ...state,
                    isLoading: false,
                    isError : true
                }
            case UPDATE_USER_FULFILLED:
                return{
                    ...state,
                    isLoading: false,
                    isError : false,
                    data : state.data.map(data => (data.id === action.payload.data.data.id) ?
                    action.payload.data.data : data)
                } 

            case DELETE_USER_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case DELETE_USER_REJECTED:
                return{
                    ...state,
                    isLoading: false,
                    isError : true
                }
            case DELETE_USER_FULFILLED:
                return{
                    ...state,
                    isLoading: false,
                    isError : false,
                    data : state.data.filter(data => data.id !== action.payload.data.id)
                } 
                case LOGIN_USER_PENDING:
                    return{
                        ...state,
                        isLoading : true
                    }
        
                    case LOGIN_USER_REJECTED:
                        return{
                            ...state,
                            isLoading: false,
                            isError : true
                        }
                    case LOGIN_USER_FULFILLED:
                        return{
                            ...state,
                            isLoading: false,
                            isError : false,
                            data : action.payload.data
                        } 
        

        default :
            return state
            
            //[...state.data.results ,action.payload.data.results]
    }
}

export default user