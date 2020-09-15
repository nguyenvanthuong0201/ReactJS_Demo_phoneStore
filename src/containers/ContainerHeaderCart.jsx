import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '.././router/routerHeader'
import Cpt_Header from '../components/com.Header/Cpt_Header';


class ContainerHeaderCart extends Component {
    render() {
    let{cart}=this.props;
    return <Cpt_Header cart={cart}/>
    }
}
const mapStateToProps = (state) => {
    return {
      cart: state.reHomeCart,       
    };
};
export default connect(mapStateToProps,null)(ContainerHeaderCart);