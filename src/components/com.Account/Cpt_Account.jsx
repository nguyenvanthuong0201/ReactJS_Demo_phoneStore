import { Divider, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import * as Message from "../../constants/Messages"
import { Redirect } from 'react-router-dom';

class Cpt_Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }
    onButtonLogout=()=>{
        localStorage.removeItem("userLogin");
        this.props.onButtonLogout();
        this.props.onOpenSnackbar();
        this.props.onChangeMessage(Message.MSG_LOGOUT_SUCCESS)
        window.location.reload();
        window.location.href='/'
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
     
    upload(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
         let imgPreview;
        if (this.state.file) {
            imgPreview = <img  src={this.state.file} alt='' />;
        }
        let{informationUserLogin}=this.props
        console.log(informationUserLogin) //// [] 
        return (
            <div>
                {informationUserLogin.length !== 0 ? 
                      (<div className="container">
                      <div className="row">
                          <div className="col-sm-4 accountInformation">
                          <Paper elevation={3} >
                              <List component="nav" aria-label="mailbox folders">
                                   <ListItem >
                                      <ListItemText>
                                          {/* upload ảnh */}
                                             <form >
                                                  <div className="form-group preview">
                                                      {imgPreview}
                                                  </div>
                                                  <div className="accountUserNameLogin">
                                                      <h5 className="accountUserName">{informationUserLogin.userName}</h5>
                                                </div>
                                                  <div className="form-group">
                                                      <input type="file" className="form-control" onChange={this.uploadSingleFile} id="icon-button-file"style={{display:"none"}}  />
                                                      <label htmlFor="icon-button-file" className="accountLabel">
                                                          <IconButton color="primary" aria-label="upload picture" component="span">
                                                          <PhotoCamera />
                                                          </IconButton>
                                                      </label>
                                                  </div>
                                              </form >
                                        </ListItemText>
                                      <Divider />
                                  </ListItem>
                                  <ListItem button className="accountTaiKhoan">
                                      <ListItemText >TÀI KHOẢN</ListItemText>
                                  </ListItem>
                                  <Divider />
                                  <ListItem button className="accountDonMua">
                                      <ListItemText >ĐƠN MUA</ListItemText>
                                  </ListItem>
                                  <Divider/>
                                  <ListItem button  className="accountDangXuat" >
                                      <ListItemText onClick={this.onButtonLogout} >ĐĂNG XUẤT</ListItemText>
                                  </ListItem>
                              </List>    
                          </Paper>        
                          </div>
                              <div className="col-sm-8 accountPay">   
                              <Paper elevation={3}>
                                  <h4 className="text-center">Đơn hàng đã thanh toán</h4>
                                  <table class="table table-striped table-inverse table-responsive">
                                      <thead class="thead-inverse">
                                          <tr>
                                              <th className="accountTableSTT">STT</th>
                                              <th className="accountTableMatHang">Mặt hàng</th>
                                              <th className="accountTableTongTien">Tổng tiền</th>
                                          </tr>
                                          </thead>
                                          <tbody>
                                                  {this.props.children}
                                          </tbody>
                                  </table>
                              </Paper>
                              </div>
                          </div>
                      </div>)
                :
                    (  <Redirect to="/"/>)
                }
            </div>
        );
    }
}

export default Cpt_Account;