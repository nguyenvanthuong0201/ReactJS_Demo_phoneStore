import { combineReducers } from "redux";
import reHomeProducts from './reHomeProducts';
import reHomeCart from './reHomeCart'
import reMessage from './reMessage'
import reIPhoneProducts from './reIPhoneProduct'
import reSnackProduct from './reSnackProduct'
import reCustomer from './reCustomer'
import reHeaderDrawer from './reHeaderDrawer'
import reHeaderDrawer_Log from './reHeaderDrawer_Log'
import reButtonUserLogin from './reButtonUserLogin'
import reInformationUserLogin from './reInformationUserLogin'
import reHistory from './reHistory'
import reSearchProduct from './reSearchProduct'

const appReducers = combineReducers({
    reHomeProducts,
    reHomeCart,
    reMessage,
    reIPhoneProducts,
    reSnackProduct,
    reCustomer,
    reHeaderDrawer,
    reHeaderDrawer_Log,
    reButtonUserLogin,
    reInformationUserLogin,
    reHistory,
    reSearchProduct
})
export default  appReducers 