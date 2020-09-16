import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import * as Message from "../../constants/Messages";
import Cpt_Modal_Home from "../com.Home/Cpt_Modal_Home";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
///
import { Button, IconButton, Snackbar } from "@material-ui/core";
import { SnackbarProvider, useSnackbar } from 'notistack';
import CloseIcon from '@material-ui/icons/Close';

class Cpt_HomeIPhone_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CARD_SUCCESS);
    this.props.onOpenSnackbar();
  };
  render() {
    let { product ,onAddToCart,onChangeMessage,onOpenSnackbar} = this.props;
    return (
      <Paper elevation={4} className="paperProductSmart">
        <div className="headerProductSmart">
          <div className="titleSmart">
            <div className="productNew ">
              {product.new === true ? "Mới ra mắt" : ""}
            </div>
            <div className="productInstallment">
              {product.installment === true ? "Trả góp 0%" : ""}
            </div>
          </div>
          <img src={product.img} alt="" />
          <div className="productTitle">
            {product.promotion ? product.promotion : ""}
          </div>
        </div>
        <div className="contentProductSmart">
          <h6>{product.title}</h6>
          <div className="sale">{product.sale.toLocaleString()} ₫</div>
        </div>
        <div className="buttonSmart">
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className="btn btn-primary seeInformationProduct"
            onClick={this.handleClickOpen}
          >
            Chi tiết
          </Button>
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
              {product.title}
            </DialogTitle>
            {/* Start boby Modal */}
            <Cpt_Modal_Home
              product={product}
              onAddToCart={onAddToCart}
              onChangeMessage={onChangeMessage}
              onOpenSnackbar={onOpenSnackbar}
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
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            className="btn btn-danger CartProductPhone"
            onClick={() => this.onAddToCart(product)}
          >
            Giỏ hàng
          </Button>
        </div>
      </Paper>
    );
  }
}

export default Cpt_HomeIPhone_Item;
