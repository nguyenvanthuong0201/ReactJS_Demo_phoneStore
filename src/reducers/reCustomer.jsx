import * as types from "../constants/ActionTypes";
import ranDomString from "randomstring";
import { Container } from "@material-ui/core";
let data=JSON.parse(localStorage.getItem("user"))

let initialState= data? data : []

const reCustomer=(state=initialState,action)=>{
    switch(action.type){
        case types.ADD_CUSTOMER:
            console.log(action)
        let customer = {
            userName: action.customer.userName,
            email: action.customer.email,
            password: action.customer.password,
            rePassword: action.customer.rePassword,
            phone: action.customer.phone,
            address: action.customer.address,
            id: action.customer.id,
        }
        customer.id=ranDomString.generate();
        state.push(customer)
        localStorage.setItem("user",JSON.stringify(state))
        return [...state];        
        case types.LOGIN:
        let users= JSON.parse(localStorage.getItem("user"));
        if(users){
            if(users.length > 0 ){
                users.map((user,index)=>{
                    if(user.email===action.customer.email){
                        if(user.password === action.customer.password){
                           const userLogin=user
                           index=index
                           localStorage.setItem("userLogin",JSON.stringify(userLogin))
                           window.location.reload();
                        }
                    }   
                })
            }
            else{
                alert("Đăng nhập thất bại")
            }
        }
        else{
            alert("Đăng nhập thất bại")
            
        }
        // let flag = false
     
        
        // if(flag === true){
        //     alert("đăng nhập thành công")
        // }
        // else{
        //     alert("Đăng nhập thất bại")
        // }
            
        default: return state;
    }
}
export default reCustomer;
