import React, { Component } from "react";
import * as Message from "../../constants/Messages";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TextField from "@material-ui/core/TextField";
import PhoneIcon from "@material-ui/icons/Phone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import Cpt_Modal_Home from "./Cpt_Modal_Home";

export default class Cpt_HomeProduct extends Component {
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
    console.log(product);
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CARD_SUCCESS);
  };

  render() {
    let { product,onAddToCart,onChangeMessage} = this.props;
    return (
      <SplideSlide>
        <div className="card cartHomeProduct">
          <img className="card-img-top" src={product.img} alt={product.alt} />
          <div className="card-body">
            <h4 className="card-title">{product.title} </h4>
            <div className="card-text">
              <span className="float-left">
                {product.sale.toLocaleString()} ₫
              </span>
              <span className="float-right sale">
                {product.cost.toLocaleString()} {product.cost ? "₫" : ""}
              </span>
            </div>
            <br />
            <div className="card-text cartButton">
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className="btn btn-primary float-left"
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
               <Cpt_Modal_Home product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
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
                className="btn btn-danger float-right"
                onClick={() => this.onAddToCart(product)}
              >
                Giỏ hàng
              </Button>
            </div>
          </div>
        </div>
      </SplideSlide>
    );
  }
}
