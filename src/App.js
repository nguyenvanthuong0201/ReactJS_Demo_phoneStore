import React, { Component } from "react";
import Cpt_Header from "./components/Cpt_Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './router/routerContent'
import Cpt_Footer from "./components/Cpt_Footer";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { IconButton } from "@material-ui/core";

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
          <Cpt_Header/>
          <div className="container">
          <Switch>{this.showContent(routes)}</Switch>
          </div>
            <IconButton className="icon" id="icon">
              <KeyboardArrowUpIcon/>
            </IconButton>
          <Cpt_Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
