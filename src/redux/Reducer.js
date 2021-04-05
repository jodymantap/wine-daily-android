import { combineReducers } from 'redux';

const initialState = {
    isLogin: false,
    data : [],
}

const auth = (state=initialState, action) => {
    switch (action.type) {
        case "login" : {
            return {
            ...state,
            isLogin:true,
            dataUser : action.payload }
        }
        case "addData" : {
            return {
                ...state,
                data : [...state.data, {todo : action.payload.name, id : action.payload.id}]
            }
        }
        default : return state;
    }
}

export default combineReducers({auth})