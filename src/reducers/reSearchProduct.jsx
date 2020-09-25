import * as types from '../constants/ActionTypes'
let initialState= "";
let reSearchProduct = (state=initialState,action)=>{
    switch (action.type) {
        case types.SEARCH_PRODUCT:
            console.log(action)
            console.log(action.keyword);
            return action.keyword;
        default: return state
    }
}
export default reSearchProduct