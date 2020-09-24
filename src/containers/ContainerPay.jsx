
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actDeleteProduct,actDeleteMessage, actUpdateMessage, actSnackbar,actPayAddProduct, actChangeMessage, actDeleteAllCart } from '../actions/indexActions';
import Cpt_Pay from '../components/com.pay/Cpt_Pay';
import Cpt_PayItem from '../components/com.pay/Cpt_PayItem';

class ContainerPay extends Component {
    showCartItem=(cart)=>{
    let{onDeleteCart,onDeleteMessage,onOpenSnackbar}=this.props
    let result=null;
    if(cart.length > 0 ){
        result = cart.map((item,index)=>{
            return(
            <Cpt_PayItem key={index}
                item={item}
                index={index} 
                onDeleteCart={onDeleteCart}
                onDeleteMessage={onDeleteMessage}
                onOpenSnackbar={onOpenSnackbar}
                />
            )
        })
    }
    return result;
    }
    render() {
        let{cart,informationUser,onAddPayCart,onChangeMessage,onOpenSnackbar,onDeleteAllCart}=this.props;
        return (
                <Cpt_Pay 
                cart={cart} 
                informationUser={informationUser} 
                onAddPayCart={onAddPayCart}
                onChangeMessage={onChangeMessage}
                onOpenSnackbar={onOpenSnackbar}
                onDeleteAllCart={onDeleteAllCart}
                >
                {this.showCartItem(cart)}
                </Cpt_Pay>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      cart: state.reHomeCart,    
      informationUser: state.reInformationUserLogin
    };
  };
const mapDispatchToProps =(dispatch,props)=> {
    return{
        onDeleteCart:(product)=>{
            dispatch(actDeleteProduct(product));
        },   
         onDeleteMessage:(message)=>{
            dispatch(actDeleteMessage(message))
        },
        onUpdateMessage:(message)=>{
            dispatch(actUpdateMessage(message))
        },
        onOpenSnackbar:()=>{
            dispatch(actSnackbar())
        },
        onAddPayCart:(product)=>{
            dispatch(actPayAddProduct(product))
        },
        onChangeMessage:(message)=>{ 
            dispatch(actChangeMessage(message));
        },
        onDeleteAllCart : () =>{
            dispatch(actDeleteAllCart());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPay);
