import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '.././router/routerHeader'
import Cpt_Header from '../components/com.Header/Cpt_Header';


class ContainerHeaderCart extends Component {
    // onTotalCart = (carts) => {
    //     let result = null;
    //     if(carts.length > 0 ){
    //         result= carts.map((cart,index)=>{
    //             return <Header cart={cart} key={index}/>
    //         })
    //     }
    //     // if (cart.length > 0) {
    //     //   for (let i = 0; i < cart.length; i++) {
    //     //     total += cart[i].quantity;
    //     //   }
    //     // }
    //     // return total;
    //   };
    render() {
    let{carts}=this.props
    console.log("aaa",carts)
    return <Cpt_Header carts={carts}/>
    }
}
const mapStateToProps = (state) => {
    return {
      cart: state.reHomeCart,       
    };
};
export default connect(mapStateToProps,null)(ContainerHeaderCart);