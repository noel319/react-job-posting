import {combineReducers} from 'redux'

import user from './user'
import job from './job'
import company from './company'
import categories from './category'

const appReducer = combineReducers({
    user,
    job,
    company,
    categories
})

export default appReducer