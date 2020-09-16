import React, { Component } from 'react';
import { connect } from "react-redux";
import Cpt_HomeCart from '../components/com.Cart/Cpt_HomeCart';
import * as message from '../constants/Messages'
import Cpt_HomeCart_Item from '../components/com.Cart/Cpt_HomeCart_Item';
import Cpt_HomeCart_Result from '../components/com.Cart/Cpt_HomeCart_Result';
import { actDeleteProduct,actDeleteMessage, actUpdateCart, actUpdateMessage, actSnackbar } from '../actions/indexActions';

class ContainerHomeCart extends Component {
    showCartItem=(cart)=>{
        let{onDeleteCart,onDeleteMessage,onUpdateCart,onUpdateMessage,onOpenSnackbar}=this.props
    let result=null;
    if(cart.length > 0 ){
        result = cart.map((item,index)=>{
            return(
            <Cpt_HomeCart_Item key={index}
                item={item}
                index={index} 
                onDeleteCart={onDeleteCart}
                onDeleteMessage={onDeleteMessage}
                onUpdateCart={onUpdateCart}
                onUpdateMessage={onUpdateMessage}
                onOpenSnackbar={onOpenSnackbar}
                />
            )
        })
    }
    return result;
    }
    showSumCart =(cart)=>{
        let result = null;
        if(cart.length > 0){
            result = <Cpt_HomeCart_Result cart={cart}/>
        }
        return result;
    }
    render() {
        let{cart}=this.props;
        return (
                <Cpt_HomeCart>
                {this.showCartItem(cart)}
                {this.showSumCart(cart)}
                </Cpt_HomeCart>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      cart: state.reHomeCart,       
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
        onUpdateCart:(product,quantity)=>{
            dispatch(actUpdateCart(product,quantity))
        },
        onUpdateMessage:(message)=>{
            dispatch(actUpdateMessage(message))
        },
        onOpenSnackbar:()=>{
            dispatch(actSnackbar())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHomeCart);
