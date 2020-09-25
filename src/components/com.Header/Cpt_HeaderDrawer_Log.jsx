import React, { Component } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Badge, Button, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import * as Message from "../../constants/Messages"
import { Redirect } from "react-router-dom";

class Cpt_HeaderDrawer_Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: "",
      password: "",
    };
  }
  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };
  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };
  onChange=(event)=>{
    let target= event.target;
    let name = target.name;
    let value = target.value
    this.setState({
        [name]:value
    })
  }
  onClear=()=>{
    this.setState({
        email: "",
        password: "",
    })
  }
  onSubmit=(event)=>{
    event.preventDefault();
    let {email,password}=this.state
   if(email===""){
      alert("Bạn chưa nhập email")
    }
    else if(password===""){
      alert("Bạn chưa nhập Password")
      }
    else{
      this.props.onLogin(this.state)
      // console.log(this.state)
      this.props.onCloseDrawerLog()
      if(JSON.parse(localStorage.getItem("userLogin"))){
          this.props.onButtonLogin() 
          this.props.onOpenSnackbar()
          this.props.onChangeMessage(Message.MSG_LOGIN_SUCCESS)
          return <Redirect to="/account"/>

      }
      else{
        this.props.onOpenSnackbar()
        this.props.onChangeMessage(Message.MSG_LOGIN_FAIL)
      }
    }
}
  render() {
    return (
      <Paper elevation={3} className="paperLog">
        <div className="card">
          <div className="card-body bodyRegister">
            <h4 className="card-title titleRegister">Đăng nhập</h4>
            <div className="contentLogin">
              <form onSubmit={this.onSubmit}>
                {/* input Email */}
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"  
                  className="txtEmailLog"
                  onChange={this.onChange}
                  value={this.state.email}
                />
                {/* input Password */}
                <TextField
                //   id="outlined-adornment-password"
                  variant="outlined"
                  type={this.state.showPassword ? "text" : "password"}
                  label="Password"
                  name="password"
                  value={this.state.password}
                  className="txtPasswordLog"
                  onChange={this.onChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                        //   aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="btn btn-primary loginDrawer"
                  type="submit"           
                >
                  Đăng nhập
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  color="secondary"
                  className="btn btn-danger loginDrawer"
                  onClick={this.onClear}
                >
                  Hủy
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Cpt_HeaderDrawer_Log;
