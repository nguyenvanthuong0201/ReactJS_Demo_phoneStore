import React, { Component } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Badge, Button, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import * as Message from "../../constants/Messages"

class Cpt_HeaderDrawer_Res extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      userName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      address: "",
      id:""
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
        userName: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
        address: "",
    })
  }
  onSubmit=(event)=>{
    event.preventDefault();
    let {userName,email,password,rePassword,phone,address}=this.state
    if(rePassword !== password){
        alert("mật khẩu không giống nhau")
    }
    else if(userName===""){
        alert("Bạn chưa nhập tên")
    }
    else if(email===""){
      alert("Bạn chưa nhập email")
    }
    else if(password===""){
      alert("Bạn chưa nhập Password")
      }
    else if(rePassword===""){
      alert("Bạn chưa nhập lại Password")
      }
      else if(phone===""){
        alert("Bạn chưa nhập số điện thoại")
        }
        else if(address===""){
          alert("Bạn chưa nhập địa chỉ")
          }
    else{
      this.props.onAddCustomer(this.state)
      this.props.onOpenSnackbar()
      this.props.onChangeMessage(Message.MSG_ADD_CUSTOMER_SUCCESS)
      this.props.onCloseDrawerRes()
    }
}
  render() {
    return (
      <Paper elevation={3} className="paperRes">
        <div className="card">
          <div className="card-body bodyRegister">
            <h4 className="card-title titleRegister">Đăng ký</h4>
            <div className="contentRegister">
              <form onSubmit={this.onSubmit}>
                {/* input UserName */}
                <TextField
                  id="outlined-basic"
                  label="Họ và tên"
                  variant="outlined"
                  name="userName"
                  onChange={this.onChange}
                  value={this.state.userName}
                />
                {/* input Email */}
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
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
                  className="txtPassword"
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
                {/* input RePassword */}
                <TextField
                //   id="outlined-adornment-password"
                  variant="outlined"
                  type={this.state.showPassword ? "text" : "password"}
                  label="Nhập lại password"
                  name="rePassword"
                  value={this.state.rePassword}
                  onChange={this.onChange}
                //   onChange={this.handleChange("password")}
                  className="txtPassword"
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
                {/* input Phone */}
                <TextField
                  id="outlined-basic"
                  label="Điện thoại"
                  variant="outlined"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  inputComponent={this.state.mask}
                />
                {/* input Address */}
                <TextField
                  id="outlined-basic"
                  label="Địa chỉ"
                  name="address"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.address}
                />
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="btn btn-primary registerDrawer"
                  type="submit"           
                >
                  Đăng ký
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  color="secondary"
                  className="btn btn-danger registerDrawer"
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

export default Cpt_HeaderDrawer_Res;
