import React, { Component } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

class Cpt_HomeCart extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h4>Giỏ hàng</h4>
              <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                  <tr>
                    <th>xóa</th>
                    <th>hình ảnh</th>
                    <th>sản phẩm</th>
                    <th>Giá</th>
                    <th>số lượng</th>
                    <th>tạm tính</th>
                  </tr>
                </thead>
                <tbody className="cartProduct">
                  <tr className="cartProduct_tr">
                    <td>
                      <IconButton className="cartButtonDelete">
                        <ClearIcon />
                      </IconButton>
                    </td>
                    <td className="cartImg">
                      <img src="img/sp2.jpg" alt="ảnh" />
                    </td>
                    <td>IPad 9.7 2017 - Gen 5-32Gb dasdsa asdas sdsadsa a</td>
                    <td className="cost">6000000 ₫</td>
                    <td className="cartAddRemove">
                      <IconButton className="cartButtonRemove">
                        <RemoveCircleIcon />
                      </IconButton>
                      <b>3</b>
                      <IconButton className="cartButtonAdd">
                        <AddCircleIcon />
                      </IconButton>
                    </td>
                    <td className="cost">6000000 ₫</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-2">
            <div class="card-deck">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Tổng tiền</h4>
                  <p class="card-text">20000000 ₫</p>
                  <button type="button" class="btn btn-outline-danger btn-block">Thanh toán</button>
                </div>
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
