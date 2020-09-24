import * as types from '../constants/ActionTypes'
let initialState=  false;
let reHeaderDrawer_Log =(state=initialState,action)=>{
    switch (action.type) {
        case types.OPEN_DRAWER_LOG:
            return true
        case types.CLOSE_DRAWER_LOG:  
            return false
        default: return state
    }
}
export default reHeaderDrawer_Log