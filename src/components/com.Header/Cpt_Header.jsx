import React, { Component, forwardRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
// import header from '../../router/routerHeader';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import AppleIcon from "@material-ui/icons/Apple";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import TabletMacIcon from "@material-ui/icons/TabletMac";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HeadsetIcon from "@material-ui/icons/Headset";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Badge, Paper } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Cpt_HeaderDrawer_Res from "./Cpt_HeaderDrawer_Res";
import Cpt_HeaderDrawer_Log from "./Cpt_HeaderDrawer_Log";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as Message from "../../constants/Messages";

///

const MenuLink = ({ label, to, activeOnlyWhenExact, icon }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "nav-item active" : "nav-item";
        return (
          <li className={active}>
            <Link to={to} className="nav-link">
              {icon}
              <br />
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Cpt_Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: "right",
      showPassword: false,
      open: false,
      anchorEl: null,
      keyWord: "",
    };
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSearch = () => {
    this.props.onSearchProduct(this.state.keyWord); // dispatch searchTask
  };

  onNumber = (cart) => {
    let number = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        number += cart[i].quantity;
      }
    }
    return number;
  };

  onOpenDrawer = () => {
    this.props.onOpenDrawerRes();
  };
  onCloseDrawer = () => {
    this.props.onCloseDrawerRes();
  };
  onCloseDrawer_log = () => {
    this.props.onCloseDrawerLog();
  };
  onOpenDrawer_log = () => {
    this.props.onOpenDrawerLog();
  };
  handleMenu = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      anchorEl: null,
    });
  };
  handleCloseButton = () => {
    localStorage.removeItem("userLogin");
    this.props.onButtonLogout();
    this.props.onOpenSnackbar();
    this.props.onChangeMessage(Message.MSG_LOGOUT_SUCCESS);
    this.setState({
      open: false,
    });
    window.location.reload();
    window.location.href = "/";
  };

  render() {
    let {
      cart,
      onOpenSnackbar,
      onAddCustomer,
      onChangeMessage,
      drawer,
      onCloseDrawerRes,
      onCloseDrawerLog,
      drawer_log,
      onLogin,
      userLogin,
      onButtonLogin,
      informationUserLogin,
    } = this.props;
    let { keyWord } = this.state;
    return (
      <div className="backgroundHeader">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="navbar-brand">
              <Link to="/">
                <img src="img/logo.png" alt="aaaa" />
              </Link>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  value={keyWord}
                  name="keyWord"
                  onChange={this.onChange}
                />
                <IconButton
                  aria-label="search"
                  color="inherit"
                  className="iconSearch"
                  onClick={this.onSearch}
                >
                  <SearchIcon />
                </IconButton>
              </form>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center fontSize">
                {/* {this.showMenu(headers)} */}

                <MenuLink
                  label="I Phone"
                  to="/iPhone"
                  activeOnlyWhenExact={false}
                  icon={<AppleIcon />}
                />
                <MenuLink
                  label="Điện thoại"
                  to="/phone"
                  activeOnlyWhenExact={false}
                  icon={<PhoneIphoneIcon />}
                />
                <MenuLink
                  label="Tablet"
                  to="/tablet"
                  activeOnlyWhenExact={false}
                  icon={<TabletMacIcon />}
                />
                <MenuLink
                  label="Laptop"
                  to="/lapTop"
                  activeOnlyWhenExact={false}
                  icon={<LaptopMacIcon />}
                />
                <MenuLink
                  label="Phụ Kiện"
                  to="/accessories"
                  activeOnlyWhenExact={false}
                  icon={<HeadsetIcon />}
                />
                <MenuLink
                  label="Giỏ Hàng"
                  to="/cart"
                  activeOnlyWhenExact={false}
                  icon={
                    <Badge badgeContent={this.onNumber(cart)} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  }
                />
              </ul>

              <ul className="navbar-nav ml-auto mt-2 mt-lg-0 buttonLogin">
                {userLogin === true ? (
                  /// xuất hiện UserLoginHome
                  <div className="MenuButtonLoginHeader">
                    <div className="HeaderIconUsername">
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                        className="iconUserLoginHead"
                      >
                        <AccountCircle className="iconButtonLogin" />
                      </IconButton>
                      <h6 className="HeaderUserNameLogin">
                        Hi {informationUserLogin.userName}
                      </h6>
                    </div>
                    <Menu
                      id="simple-menu"
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose}
                      className="menuSimple"
                    >
                      <Link to="/account" className="linkToPay">
                        <MenuItem
                          onClick={this.handleClose}
                          className="menuAccount"
                        >
                          Tài khoản
                        </MenuItem>
                      </Link>
                      <Link to="/pay" className="linkToPay">
                        <MenuItem
                          onClick={this.handleClose}
                          className="menuPayButton"
                        >
                          Thanh toán
                        </MenuItem>
                      </Link>
                      <MenuItem
                        onClick={this.handleCloseButton}
                        className="menuLogout"
                      >
                        Đăng xuất
                      </MenuItem>
                    </Menu>
                  </div>
                ) : (
                  //////////////////////

                  /// xuất hiện button Login và Đăng ký
                  <div>
                    <Button
                      variant="contained"
                      size="medium"
                      color="primary"
                      className="btn btn-primary user"
                      onClick={this.onOpenDrawer}
                    >
                      <PersonAddIcon />
                      Register
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      color="secondary"
                      className="btn btn-danger user"
                      onClick={this.onOpenDrawer_log}
                    >
                      <HowToRegIcon />
                      Login
                    </Button>
                  </div>
                )}

                {/* / Drawer */}
                <React.Fragment>
                  <SwipeableDrawer
                    anchor="right"
                    open={drawer}
                    onClose={this.onCloseDrawer}
                  >
                    <Cpt_HeaderDrawer_Res
                      onOpenSnackbar={onOpenSnackbar}
                      onAddCustomer={onAddCustomer}
                      onChangeMessage={onChangeMessage}
                      onCloseDrawerRes={onCloseDrawerRes}
                    />
                  </SwipeableDrawer>
                </React.Fragment>
                {/* / Drawer */}

                {/* / Drawer */}
                <React.Fragment>
                  <SwipeableDrawer
                    anchor="right"
                    open={drawer_log}
                    onClose={this.onCloseDrawer_log}
                    className="DrawerLogin"
                  >
                    <Cpt_HeaderDrawer_Log
                      onOpenSnackbar={onOpenSnackbar}
                      onChangeMessage={onChangeMessage}
                      onCloseDrawerLog={onCloseDrawerLog}
                      onLogin={onLogin}
                      onButtonLogin={onButtonLogin}
                    />
                  </SwipeableDrawer>
                </React.Fragment>
                {/* / Drawer */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Cpt_Header;
