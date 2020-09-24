import React, { Component } from 'react';
import { connect } from "react-redux";
import { actChangeMessage, actLogoutButton, actSnackbar } from '../actions/indexActions';
import Cpt_Account from '../components/com.Account/Cpt_Account';
import Cpt_AccountItem from '../components/com.Account/Cpt_AccountItem';


class ContainerAccount extends Component {
    showCartItem=(payCarts)=>{
        let result=null;
        if(payCarts.length > 0){
            result=payCarts.map((payCart,index)=>{
                return(
                    <Cpt_AccountItem
                    payCart={payCart}
                    index={index}
       
                    />
                )
            })
        }
        return result;
    }
    render() {
        let {payCarts,
            informationUserLogin,
            onButtonLogout,
            onOpenSnackbar,
            onChangeMessage,
        }=this.props
        return (
            <Cpt_Account 
            informationUserLogin={informationUserLogin}
            onButtonLogout={onButtonLogout}
            onOpenSnackbar={onOpenSnackbar}
            onChangeMessage={onChangeMessage}
            >
                {this.showCartItem(payCarts)}
            </Cpt_Account>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        payCarts: state.reHistory,
        informationUserLogin: state.reInformationUserLogin,
    }
}

const mapDispatchToProps = (dispatch )=>{
    return{
        onButtonLogout:()=>{
            dispatch(actLogoutButton());
          },
          onOpenSnackbar: () => {
            dispatch(actSnackbar());
          },
          onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
          },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ContainerAccount);