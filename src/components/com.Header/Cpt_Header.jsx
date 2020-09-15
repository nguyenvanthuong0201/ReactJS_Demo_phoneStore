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
import { Badge } from "@material-ui/core";


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
  // showMenu = (headers) =>{
  //   let menus=headers
  //   let result=null;
  //   if(menus.length > 0)
  //   {
  //     result = menus.map((menu,index)=>{
  //       return (
  //       <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} icon={menu.icon}/>
  //       )
  //     });
  //   }
  //   return result;
  // }
  onNumber = (cart)=>{
    let number=0;
    if(cart.length > 0 ){
      for(let i = 0; i < cart.length; i++){
        number += cart[i].quantity
      }
    }
    return number;
  }
  render() {
    let {cart}=this.props
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
                />
                <IconButton
                  aria-label="search"
                  color="inherit"
                  className="iconSearch"
                >
                  <SearchIcon />
                </IconButton>
              </form>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center">

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

              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <Button color="inherit">Login</Button>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Cpt_Header;
