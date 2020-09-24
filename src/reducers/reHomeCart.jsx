import * as types from "../constants/ActionTypes";
let data=JSON.parse(localStorage.getItem("store"))
let initialState= data? data : [];

const reHomeCart = (state=initialState,action)=>{
    let {product,quantity}=action;    /// lấy sự kiện từ action sang
    let index= -1 /// -1 có nghĩa là không tìm thấy;
    switch (action.type) {
        case types.ADD_TO_CARD:
            console.log(action)
        index = findProductInCart(state,product)    /// tìm vị trí sản phẩm khi mình bấm vào sản phẩm mình chọn
        if(index !== -1){          /// nếu tìm thấy
        state[index].quantity += quantity;     // cộng dồn sản phẩm
        }
        else{
            state.push({product,quantity})   // push vào mãng thêm 1 phần tử mới 
        }
        localStorage.setItem("store",JSON.stringify(state)); 
        return [...state];

        case types.DELETE_PRODUCT:
        index = findProductInCart(state,product)
        if(index !==-1){
            state.splice(index,1);
        }
        localStorage.setItem("store",JSON.stringify(state));
        return [...state];

        case types.UPDATE_CART:
        index = findProductInCart(state, product)
        if(index !==-1){
            state[index].quantity = quantity;
        }
        localStorage.setItem("store",JSON.stringify(state));
        return [...state];

        case types.DELETE_ALL_CART:
            state.splice(0,state.length);
            localStorage.setItem("store",JSON.stringify(state));
            console.log(action)
            return [...state];

    default: return [...state];
    
    }
}

const findProductInCart = (cart,product) => {
    let index = -1 ; // -1 có nghĩa là không tìm thấy 
    if(cart.length > 0){
        for(let i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}
export default reHomeCart