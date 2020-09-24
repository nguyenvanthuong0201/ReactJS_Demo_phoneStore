import * as types from '../constants/ActionTypes'
let data=JSON.parse(localStorage.getItem("pay"))
let initialState= data? data : [];
const reHistory = (state=initialState,action)=>{
    switch (action.type) {
        case types.PAY_PRODUCT:
            state.push(action.cart)
            localStorage.setItem("pay",JSON.stringify(state))
        return [...state]

        default: return[...state];
    }
}
export default reHistory