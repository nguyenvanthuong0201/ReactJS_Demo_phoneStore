import { combineReducers } from "redux";
import reHomeProducts from './reHomeProducts';
import reHomeCart from './reHomeCart'
import reMessage from './reMessage'
import reIPhoneProducts from './reIPhoneProduct'
const appReducers = combineReducers({
    reHomeProducts,
    reHomeCart,
    reMessage,
    reIPhoneProducts
})
export default  appReducers