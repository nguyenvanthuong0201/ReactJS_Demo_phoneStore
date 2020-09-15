import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cpt_HomeIPhone from '../components/com.IPhone/Cpt_HomeIPhone';
import Cpt_HomeIPhone_Item from '../components/com.IPhone/Cpt_HomeIPhone_Item';
import { actAddToCart, actChangeMessage } from '../actions/indexActions';


class ContainerIPhone extends Component {
    showIPhone=(products)=>{
        let {onAddToCart,onChangeMessage}= this.props
        let result = null;
        if(products.length > 0 ){
            result= products.map((product,index)=>{
                return(
                    <Cpt_HomeIPhone_Item 
                    product={product}
                    key={index}
                    onChangeMessage={onChangeMessage} 
                    onAddToCart={onAddToCart}/>
                )
            })
        }
        return result;
    }
    render() {
    let {products}=this.props
    return <Cpt_HomeIPhone>{this.showIPhone(products)}</Cpt_HomeIPhone>;
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.reIPhoneProducts
    }
}

const mapDispatchToProps =(dispatch,props)=> {
    return{
        onAddToCart:(product)=>{
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerIPhone);