import React, { Component } from "react";
import { connect } from "react-redux";
import Cpt_Header from "../components/com.Header/Cpt_Header";
import {
  actAddCustomer,
  actChangeMessage,
  actCloseDrawerLog,
  actCloseDrawerRes,
  actLogin,
  actLoginButton,
  actLogoutButton,
  actOpenDrawerLog,
  actOpenDrawerRes,
  actSnackbar,
} from "../actions/indexActions";

class ContainerHeaderCart extends Component {
  render() {
    let {
      cart,
      onOpenSnackbar,
      onAddCustomer,
      onChangeMessage,
      drawer,
      onOpenDrawerRes,
      onCloseDrawerRes,
      onOpenDrawerLog,
      onCloseDrawerLog,
      drawer_log,
      onLogin,
      userLogin,
      onButtonLogin,
      onButtonLogout,
      informationUserLogin
      

    } = this.props;
    return (
      <Cpt_Header
        cart={cart}
        onOpenSnackbar={onOpenSnackbar}
        onAddCustomer={onAddCustomer}
        onChangeMessage={onChangeMessage}
        drawer={drawer}
        onOpenDrawerRes={onOpenDrawerRes}
        onCloseDrawerRes={onCloseDrawerRes}
        onOpenDrawerLog={onOpenDrawerLog}
        onCloseDrawerLog={onCloseDrawerLog}
        drawer_log = {drawer_log}
        onLogin={onLogin}
        userLogin={userLogin}
        onButtonLogin={onButtonLogin}
        onButtonLogout={onButtonLogout}
        informationUserLogin={informationUserLogin}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.reHomeCart,
    drawer: state.reHeaderDrawer,
    drawer_log: state.reHeaderDrawer_Log,
    userLogin : state.reButtonUserLogin,
    informationUserLogin: state.reInformationUserLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenSnackbar: () => {
      dispatch(actSnackbar());
    },
    onAddCustomer: (customer) => {
      dispatch(actAddCustomer(customer));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onOpenDrawerRes: () => {
      dispatch(actOpenDrawerRes());
    },
    onCloseDrawerRes: () => {
      dispatch(actCloseDrawerRes());
    },
    onOpenDrawerLog: () => {
      dispatch(actOpenDrawerLog());
    },
    onCloseDrawerLog: () => {
      dispatch(actCloseDrawerLog());
    },
    onLogin: (customer) => {
      dispatch(actLogin(customer));
    },
    onButtonLogin:()=>{
      dispatch(actLoginButton());
    },
    onButtonLogout:()=>{
      dispatch(actLogoutButton());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerHeaderCart);
