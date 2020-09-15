import { combineReducers } from "redux";
import reHomeProducts from './reHomeProducts';
import reHomeCart from './reHomeCart'
import reMessage from './reMessage'
import reIPhoneProducts from './reIPhoneProduct'
import reModalProduct from './reModalProduct'
const appReducers = combineReducers({
    reHomeProducts,
    reHomeCart,
    reMessage,
    reIPhoneProducts,
    reModalProduct
})
export default  appReducers 