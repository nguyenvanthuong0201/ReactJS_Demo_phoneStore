import React, { Component } from "react";
import { Link } from "react-router-dom";


class Cpt_HomeCart extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h4>Giỏ hàng</h4>
              <hr/> 
              {this.props.children[0]?<table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                  <tr>
                    <th  className="cartColClose"></th>
                    <th className="cartColPicture">Hình ảnh</th>
                    <th className="cartColProduct">Sản phẩm</th>
                    <th className="cartColCost">Giá</th>
                    <th className="cartColNumber">Số lượng</th>
                    <th className="cartColSumTotal">Tạm tính</th>
                  </tr>
                </thead>
                <tbody className="cartProduct">
                  {this.props.children[0]}
                </tbody>
              </table> : <Link to="/"><button type="button" className="btn btn-outline-primary">Bạn chưa có sản phẩm nào hết</button> </Link> }
            </div>
            <div className="col-sm-4">
            <div className="card-deck">
              <div className="card">
              {this.props.children[1]}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cpt_HomeCart;
