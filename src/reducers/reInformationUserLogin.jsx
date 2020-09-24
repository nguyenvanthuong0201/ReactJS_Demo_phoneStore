import * as types from '../constants/ActionTypes'

let data = JSON.parse(localStorage.getItem("userLogin"));
let initialState = data ?  data : [];
const reInformationUserLogin = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
};
export default reInformationUserLogin;
