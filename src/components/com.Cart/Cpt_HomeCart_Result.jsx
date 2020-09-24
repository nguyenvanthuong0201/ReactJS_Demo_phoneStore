import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";


class Cpt_HomeCart_Result extends Component {
  onSumTotal = (cart) => {
    let total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.sale * cart[i].quantity;
      }
    }
    return total.toLocaleString();
  };
  render() {
    let { cart } = this.props;
    return (
      <div className="card-body text-center">
        <h4 className="card-title">Tổng tiền</h4>
        <p className="card-text">{this.onSumTotal(cart)} ₫</p>
        <Link to="/pay"className="noneStyle">
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            className="btn btn-outline-danger btn-block"
          >
            Thanh toán
          </Button>
        </Link>
      </div>
    );
  }
}

export default Cpt_HomeCart_Result;
