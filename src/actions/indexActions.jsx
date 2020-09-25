import *as types from '../constants/ActionTypes'
export const actAddToCart = (product,quantity) =>{
    return{
        type: types.ADD_TO_CARD,
        product,
        quantity,
    }
}

export const actChangeMessage = (message) =>{
    return{
        type: types.CHANGE_MESSAGE,
        message,
    }
}

export const actDeleteProduct =(product)=>{
    return{
        type: types.DELETE_PRODUCT,
        product,
    }
}
export const actDeleteMessage = (message) =>{
    return{
        type: types.CHANGE_MESSAGE,
        message,
    }
}
export const actUpdateCart=(product,quantity)=>{
    return{
        type: types.UPDATE_CART,
        product,
        quantity,
    }
}
export const actUpdateMessage = (message) =>{
    return{
        type: types.CHANGE_MESSAGE,
        message,
    }
}
export const actSnackbar = ()=>{
    return{
        type: types.OPEN_SNACKBAR,
    }
}
export const actSnackbarClose=()=>{
    return{
        type: types.OPEN_SNACKBAR_CLOSE
    }
}
export const actAddCustomer=(customer)=>{
    return{
        type: types.ADD_CUSTOMER,
        customer
    }
}
export const actCloseDrawerRes=()=>{
    return{
        type: types.CLOSE_DRAWER_RES
    }
}
export const actOpenDrawerRes=()=>{
    return{
        type: types.OPEN_DRAWER_RES
    }
}
export const actCloseDrawerLog=()=>{
    return{
        type: types.CLOSE_DRAWER_LOG
    }
}
export const actOpenDrawerLog=()=>{
    return{
        type: types.OPEN_DRAWER_LOG
    }
}
export const actLogin=(customer)=>{
    return{
        type: types.LOGIN,
        customer
    }
}
export const actLoginButton=()=>{
    return{
        type: types.ACTION_LOGIN,
    }
}
export const actLogoutButton=()=>{
    return{
        type: types.ACTION_LOGOUT,
    }
}
export const actPayAddProduct=(cart)=>{
    return{
        type: types.PAY_PRODUCT,
        cart,
    }
}
export const actDeleteAllCart=()=>{
    return{
        type: types.DELETE_ALL_CART,
    }
}
export const actSearchProduct=(keyword)=>{
    return{
      type: types.SEARCH_PRODUCT,
      keyword:keyword
    }
  }





