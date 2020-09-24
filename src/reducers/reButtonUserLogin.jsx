import * as types from '../constants/ActionTypes'

let data = JSON.parse(localStorage.getItem("userLogin"));
let initialState = data ?  true : false;
const reButtonUserLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.ACTION_LOGIN:
            return true
        case types.ACTION_LOGOUT:  
            return false
        default: return state
    }
};
export default reButtonUserLogin;
