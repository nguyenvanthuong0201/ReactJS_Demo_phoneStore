import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import Cpt_Home from '../components/com.Home/Cpt_Home'
import Cpt_HomeProduct from '../components/com.Home/Cpt_Home_Product';
import {actAddToCart,actChangeMessage, actSnackbar, } from "../actions/indexActions";



class ContainerHome extends Component {
    showSplideProduct= (SplideProduct) => {
      let {onAddToCart,onChangeMessage,onOpenSnackbar,message} =this.props
        let products= SplideProduct;
        let result= null;
        if(products.length > 0){
          result=products.map((product,index)=>{
            return(
                <Cpt_HomeProduct key={index} 
                product={product}
                onAddToCart={onAddToCart} 
                onChangeMessage={onChangeMessage}
                message={message}
                onOpenSnackbar={onOpenSnackbar}
                />
            )
          })
        }
        return result
      };
    render() {
    let { products} = this.props;
        return <Cpt_Home> {this.showSplideProduct(products)}  </Cpt_Home>
    }
}
const mapStateToProps = (state) => {
    return {
      products: state.reHomeProducts,
      message: state.reMessage,

    };
  };
  const mapDispatchToProps = (dispatch, props) => {
    return {
      onAddToCart:(product) => {
        dispatch(actAddToCart(product, 1));   // tạo 1 cái dispatch để truyền action vào product
      },
      onChangeMessage:(message)=>{ 
        dispatch(actChangeMessage(message));
      },
        onOpenSnackbar:()=>{
          dispatch(actSnackbar())
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ContainerHome);
