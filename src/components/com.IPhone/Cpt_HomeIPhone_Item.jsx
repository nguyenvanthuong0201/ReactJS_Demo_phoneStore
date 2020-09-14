import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import * as Message from '../../constants/Messages'


class Cpt_HomeIPhone_Item extends Component {
    onAddToCart = (IPhone) =>{
        this.props.onAddToCart(IPhone)
        this.props.onMessageChange(Message.MSG_ADD_TO_CARD_SUCCESS)
    }
  render() {
      let{IPhone}=this.props
    return (
      <Paper elevation={4} className="paperProductSmart">
        <div className="headerProductSmart">
          <div className="titleSmart">
    <div className="productNew ">{IPhone.new === true ? "Mới ra mắt":""}</div>
    <div className="productInstallment">{IPhone.installment === true ? "Trả góp 0%" : ""}</div>
          </div>
          <img src={IPhone.img} alt="" />
    <div className="productTitle"> {IPhone.promotion ? IPhone.promotion : ""}</div>
        </div>
        <div className="contentProductSmart">
    <h6>{IPhone.title}</h6>
    <div className="sale">{IPhone.sale.toLocaleString()} ₫</div>
        </div>
        <div className="buttonSmart">
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className="btn btn-primary seeInformationProduct"
          >
            Chi tiết
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            className="btn btn-danger CartProductPhone"
            onClick={()=>this.onAddToCart(IPhone)}
          >
            Giỏ hàng
          </Button>
        </div>
      </Paper>
    );
  }
}

export default Cpt_HomeIPhone_Item;
