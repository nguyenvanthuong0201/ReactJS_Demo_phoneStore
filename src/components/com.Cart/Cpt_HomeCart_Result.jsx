import React, { Component } from "react";

class Cpt_HomeCart_Result extends Component {
  onSumTotal = (cart) => {
    let total = 0;
    if (cart.length>0) {
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
        <button type="button" className="btn btn-outline-danger btn-block">
          Thanh toán
        </button>
      </div>
    );
  }
}

export default Cpt_HomeCart_Result;
