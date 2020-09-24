import { Button, Paper } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import * as Message from "../../constants/Messages";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Cpt_Pay_Modal from "./Cpt_Pay_Modal";

class Cpt_Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "female",
      id: "",
      email: "",
      address: "",
      phone: "",
      userName: "",
      open: false,
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.props.onDeleteAllCart();
    this.setState({
      open: false,
    });
    window.location.href = "/";
  };
  componentWillMount() {
    let { informationUser } = this.props;
    if (this.props.informationUser) {
      this.setState({
        id: informationUser.id,
        email: informationUser.email,
        address: informationUser.address,
        phone: informationUser.phone,
        userName: informationUser.userName,
      });
    }
  }
  onSubmit = (event) => {
    event.preventDefault();
    console.log("this state", this.state);
  };
  onAddPayCart(cart) {
    let { informationUser } = this.props;
    if (informationUser.length !== 0) {
      this.props.onAddPayCart(cart);
      this.props.onOpenSnackbar();
      this.props.onChangeMessage(Message.MSG_PAY_SUCCESS);
      this.handleClickOpen();
    } else {
      this.props.onOpenSnackbar();
      this.props.onChangeMessage(Message.MSG_PAY_SUCCESS);
      this.handleClickOpen();
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSumCart = (cart) => {
    let total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.sale * cart[i].quantity;
      }
    }
    return total.toLocaleString();
  };
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    let {
      cart,
      informationUser,
      product,
      onAddToCart,
      onChangeMessage,
      onOpenSnackbar,
    } = this.props;
    let { email, address, phone, userName } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <Link to="/" className="payBackToHome">
                <ArrowBackIcon />
                Mua thêm sản phẩm khác
              </Link>
              <Paper elevation={3}>
                <form onSubmit={this.onSubmit}>
                  <div className="payInformation">
                    <h5 className="title">Thông tin thanh toán</h5>
                    <hr />
                    {/* {informationUser !== null ? (
                      <div className="textFieldPay">
                        <TextField
                          id="outlined-basic"
                          value={userName}
                          label="Họ và tên"
                          variant="outlined"
                          className="userName"
                        />
                        <TextField
                          id="outlined-basic"
                          value={phone}
                          label="Số điện thoại"
                          variant="outlined"
                          className="phone"
                        />
                        <TextField
                          id="outlined-basic"
                          value={email}
                          label="Email"
                          variant="outlined"
                          className="email"
                        />
                        <TextField
                          id="outlined-basic"
                          value={address}
                          label="Địa chỉ"
                          variant="outlined"
                          className="address"
                        />
                      </div>
                    ) : ( */}
                      <div className="textFieldPay">
                        <TextField
                          id="outlined-basic"
                          label="Họ và tên"
                          variant="outlined"
                          className="userName"
                          value={userName}
                          name="userName"
                          onChange={this.onChange}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Số điện thoại"
                          variant="outlined"
                          className="phone"
                          value={phone}
                          name="phone"
                          onChange={this.onChange}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          className="email"
                          value={email}
                          onChange={this.onChange}
                          name="email"
                        />
                        <TextField
                          id="outlined-basic"
                          label="Địa chỉ"
                          variant="outlined"
                          onChange={this.onChange}
                          className="address"
                          value={address}
                          name="address"
                        />
                      </div>
                    {/* ) */}
                    {/* } */}

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FormControlLabel
                          aria-label="Acknowledge"
                          onFocus={(event) => event.stopPropagation()}
                          control={<Checkbox />}
                          onClick={(event) => event.stopPropagation()}
                          label="Giao hàng tới địa chỉ khác?"
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className="textFieldPayAddressOther">
                            <TextField
                              label="Họ và tên"
                              variant="outlined"
                              className="userNameOther"
                            />
                            <TextField
                              label="Số điện thoại"
                              variant="outlined"
                              className="phoneOther"
                            />
                            <TextField
                              label="Email"
                              variant="outlined"
                              className="email"
                            />
                            <TextField
                              label="Địa chỉ"
                              variant="outlined"
                              className="address"
                            />
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <h6> * Ghi chú đơn hàng (tùy chọn)</h6>
                    <TextField
                      id="outlined-basic"
                      label="Địa chỉ"
                      variant="outlined"
                      className="address"
                    />
                    <table class="table table-striped  table-inverse table-responsive">
                      <thead class="thead-inverse">
                        <tr>
                          <th className="tableColDelete text-center">Xóa</th>
                          <th className="tableColProduct text-left">
                            Sản phẩm
                          </th>
                          <th className="tableColSum text-left">Tổng</th>
                        </tr>
                      </thead>
                      {this.props.children}
                      <tr>
                        <td colSpan="2" className="titleSumCart">
                          Tạm tính
                        </td>
                        <td className="resultSumCart">
                          {this.onSumCart(cart)} ₫
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="titleSumCart">
                          Giao hàng
                        </td>
                        <td className="resultSumCartFree">miễn phí</td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="titleSumCart">
                          Bảo hành - iCare - Bảo hành 6 tháng
                        </td>
                        <td className="resultSumCart">0 ₫</td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="titleSumCart">
                          Tổng
                        </td>
                        <td className="resultSumCartEnd">
                          {this.onSumCart(cart)} ₫
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={this.state.value}
                            onChange={this.handleChange}
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="Chuyển khoản ngân hàng"
                            />
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="Trả tiền mặt khi nhận hàng"
                            />
                          </RadioGroup>
                        </td>
                        <td>
                          <Button
                            type="submit"
                            variant="contained"
                            size="medium"
                            color="secondary"
                            className="btn btn-danger btn-block payButtonSum"
                            onClick={() => {
                              this.onAddPayCart(cart);
                            }}
                          >
                            Thanh toán
                          </Button>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    maxWidth="lg"
                    open={this.state.open}
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={this.handleClose}
                    >
                      {/* {product.title} */}
                      <h2 className="payInformation_TitleModal">
                        Thanh toán thành công !!!
                      </h2>
                    </DialogTitle>
                    {/* Start boby Modal */}
                    <Cpt_Pay_Modal
                      product={product}
                      onAddToCart={onAddToCart}
                      onChangeMessage={onChangeMessage}
                      onOpenSnackbar={onOpenSnackbar}
                      cart={cart}
                      informationUser={informationUser}
                      email={email} 
                      address={address} 
                      phone={phone} 
                      userName={userName}
                    />
                    {/* End boby Modal */}
                    <DialogActions>
                      <Button
                        autoFocus
                        onClick={this.handleClose}
                        color="secondary"
                        className="btnCloseModal"
                      >
                        Đóng
                      </Button>
                    </DialogActions>
                  </Dialog>
                </form>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cpt_Pay;
