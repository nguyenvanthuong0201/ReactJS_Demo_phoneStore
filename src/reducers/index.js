import { combineReducers } from "redux";
import reHomeProducts from './reHomeProducts';
import reHomeCart from './reHomeCart'
import reMessage from './reMessage'
import reIPhoneProducts from './reIPhoneProduct'
import reSnackProduct from './reSnackProduct'
const appReducers = combineReducers({
    reHomeProducts,
    reHomeCart,
    reMessage,
    reIPhoneProducts,
    reSnackProduct
})
export default  appReducers 