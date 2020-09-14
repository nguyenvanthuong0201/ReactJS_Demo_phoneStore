import React, { Component } from "react";
import * as Message from "../../constants/Messages";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MessageChange from "../com.Message/MessageChange";
import Button from "@material-ui/core/Button";

export default class Cpt_HomeProduct extends Component {
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CARD_SUCCESS);
    // return <MessageChange />;
  };
  render() {
    let { product } = this.props;
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
              >
                Chi tiết
              </Button>
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
