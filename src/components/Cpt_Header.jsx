import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import header from '../router/routerHeader';
import { BrowserRouter as  Switch, Route, Link } from "react-router-dom";

const MenuLink =({label, to, activeOnlyWhenExact, icon})=>{
  return(
    <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({match})=>{
      let active= match ? "nav-item active" : "nav-item";
      return(
        <li className={active}>
            <Link to={to} className="nav-link">
            {icon}<br/>{label}
            </Link>
        </li>
      ) 
    }}     
     />
  )
};

class Cpt_Header extends Component {
  showMenu = (header) =>{
    let menus=header
    let result=null;
    if(menus.length > 0)
    {
      result = menus.map((menu,index)=>{
        return (
        <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} icon={menu.icon}/>
        )
      });
    }
    return result;
  }
  render() {
    return (
      <div className="backgroundHeader">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="navbar-brand">
              <Link to="/">
                 <img src="img/logo.png" alt="aaaa"/>
              </Link>
              <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                  aria-expanded="false" aria-label="Toggle navigation">
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
                <IconButton aria-label="search" color="inherit" className="iconSearch">
                  <SearchIcon />
                </IconButton>
              </form>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center">
              {this.showMenu(header)}
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
