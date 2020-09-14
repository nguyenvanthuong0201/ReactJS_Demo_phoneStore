import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cpt_HomeIPhone from '../components/com.IPhone/Cpt_HomeIPhone';
import Cpt_HomeIPhone_Item from '../components/com.IPhone/Cpt_HomeIPhone_Item';
import { actAddToCart, actChangeMessage } from '../actions/indexActions';


class ContainerIPhone extends Component {
    showIPhone=(IPhones)=>{
        let {onAddToCart,onMessageChange}= this.props
        let result = null;
        if(IPhones.length > 0 ){
            result= IPhones.map((IPhone,index)=>{
                return(
                    <Cpt_HomeIPhone_Item 
                    IPhone={IPhone}
                    key={index}
                    onMessageChange={onMessageChange} 
                    onAddToCart={onAddToCart}/>
                )
            })
        }
        return result;
    }
    render() {
    let {IPhones}=this.props
    return <Cpt_HomeIPhone>{this.showIPhone(IPhones)}</Cpt_HomeIPhone>;
    }
}

const mapStateToProps = (state) => {
    return{
        IPhones: state.reIPhoneProducts
    }
}

const mapDispatchToProps =(dispatch,props)=> {
    return{
        onAddToCart:(product)=>{
            dispatch(actAddToCart(product,1))
        },
        onMessageChange:(message)=>{
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerIPhone);