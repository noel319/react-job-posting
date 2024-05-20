import { GET_CATEGORY_PENDING, GET_CATEGORY_REJECTED, ADD_CATEGORY_FULFILLED, GET_CATEGORY_FULFILLED, ADD_CATEGORY_PENDING, ADD_CATEGORY_REJECTED, UPDATE_CATEGORY_PENDING, UPDATE_CATEGORY_REJECTED, UPDATE_CATEGORY_FULFILLED, DELETE_CATEGORY_PENDING, DELETE_CATEGORY_REJECTED, DELETE_CATEGORY_FULFILLED } from './../constants/actiontypes'


const initialState = {
    isLoading : false,
    isError : false,
    data : []
}
 
const categories = ( state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORY_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case GET_CATEGORY_REJECTED:
                return{
                    ...state,
                    isLoading: false,
                    isError : true
                }
            case GET_CATEGORY_FULFILLED:
                return{
                    ...state,
                    isLoading: false,
                    isError : false,
                    data : action.payload.data.data
                } 

            case ADD_CATEGORY_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case ADD_CATEGORY_REJECTED:
                return{
                    isLoading: false,
                    isError : true
                }
            case ADD_CATEGORY_FULFILLED:
                return{
                    isLoading: false,
                    isError : false,
                    data : [...state.data,action.payload.data]
                } 

            case UPDATE_CATEGORY_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case UPDATE_CATEGORY_REJECTED:
                return{
                    isLoading: false,
                    isError : true
                }
            case UPDATE_CATEGORY_FULFILLED:
                return{
                    isLoading: false,
                    isError : false,
                    data : state.data.map(data => (data.id === action.payload.data.data.id) ?
                    action.payload.data : data)
                } 
                
            case DELETE_CATEGORY_PENDING:
            return{
                ...state,
                isLoading : true
            }

            case DELETE_CATEGORY_REJECTED:
                return{
                    isLoading: false,
                    isError : true
                }
            case DELETE_CATEGORY_FULFILLED:
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

export default categories