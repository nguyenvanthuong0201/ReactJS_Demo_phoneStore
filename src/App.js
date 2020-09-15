import React, { Component } from "react";
import Cpt_Header from "./components/com.Header/Cpt_Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './router/routerContent'
import Cpt_Footer from "./components/com.Footer/Cpt_Footer";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { IconButton, Modal } from "@material-ui/core";
import Message from "./components/com.Message/Message";
import ContainerMessage from "./containers/ContainerMessage";
import ContainerHeaderCart from "./containers/ContainerHeaderCart";

class App extends Component {
  showContent=(routes)=>{
    let result= null;
    if(routes.length > 0){
      result = routes.map((route,index)=>{
          return(
          <Route key={index} exact={route.exact} path={route.path}>{route.main}</Route>
          )
      })
    }
    return result;
  }
  render() {
    return (
      <Router>
        <div>
          <ContainerHeaderCart/>
          <Message/>
          <div className="container">
          <Switch>{this.showContent(routes)}</Switch>
          </div>
            <IconButton className="icon" id="icon">
              <KeyboardArrowUpIcon/>
            </IconButton>
          <Cpt_Footer/>
        </div>
        <ContainerMessage/>
      </Router>
    );
  }
}

export default App;
