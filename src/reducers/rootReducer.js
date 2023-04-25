import { combineReducers } from 'redux'
import { userReducer } from './userSlice'
import { secretsReducer } from './secretsSlice'


const rootReducer = combineReducers( {
    user: userReducer,
    secrets: secretsReducer
} )

export default rootReducer