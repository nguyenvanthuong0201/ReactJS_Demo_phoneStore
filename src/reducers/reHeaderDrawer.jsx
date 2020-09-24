import * as types from '../constants/ActionTypes'
let initialState=  false;
let reHeaderDrawer =(state=initialState,action)=>{
    switch (action.type) {
        case types.OPEN_DRAWER_RES:
            return true
        case types.CLOSE_DRAWER_RES:  
            return false
        default: return state
    }
}
export default reHeaderDrawer