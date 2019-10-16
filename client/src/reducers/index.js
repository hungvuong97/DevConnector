import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errors from './errorReducer';
import profile from './profileReducer';
import post from './postReducer'
const  rootReducer = combineReducers({
    auth: authReducer,
    errors: errors,
    profile: profile,
    post: post

})

export default rootReducer;