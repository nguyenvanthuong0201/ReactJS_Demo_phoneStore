import * as types from '../constants/ActionTypes'
let initialState= false;
let reModalProduct =(state=initialState,action)=>{
    switch (action.type) {
        case types.OPEN_MODAL:
            return true;
        default: return state
    }
}
export default reModalProduct