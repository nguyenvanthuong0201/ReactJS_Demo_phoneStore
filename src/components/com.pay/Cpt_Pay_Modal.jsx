import { Paper } from '@material-ui/core'
import React, { Component } from 'react'

export default class Cpt_Pay_Modal extends Component {
    showModalPay=(cart)=>{
       let result=null;
        if(cart.length > 0){
          result=cart.map((item,index)=>{
                return(
                <tr key={index}>
                    <td className="rowSalePayModel">{item.product.title}<b> x </b>{item.quantity}</td>
                    <td className="rowSumPayModel">{this.onSumTotal(item.product.sale,item.quantity)} ₫</td>
                </tr>
                )
            })
        }
        return result
    }
    onSumTotal=(sale,quantity)=>{
        return (sale*quantity).toLocaleString()
    }
    onSumTotalPay = (cart) => {
        let total = 0;
        if (cart.length > 0) {
          for (let i = 0; i < cart.length; i++) {
            total += cart[i].product.sale * cart[i].quantity;
          }
        }
        return total.toLocaleString();
      };
    render() {
        let { cart ,informationUser,userName,email,address,phone}=this.props
        return (
            <div className="payModel">
                <Paper elevation={3} className="payModel__informationUser">
                    <h4>Thông tin khách hàng</h4>
                    <hr/>
                    <div className="payModel__informationUserContent">
                        <h6 className="payModel__informationUser-userName"><b>Họ và tên : </b>{informationUser === true ? informationUser.userName: userName}</h6>
                        <h6 className="payModel__informationUser-email"><b>Email : </b>{informationUser === true ? informationUser.email: email}</h6>
                        <h6 className="payModel__informationUser-phone"><b>Số điện thoại : </b>{informationUser === true ? informationUser.phone: phone}</h6>
                        <h6 className="payModel__informationUser-address"><b>Địa chỉ : </b>{informationUser === true ? informationUser.address: address}</h6>    
                    </div>
                    <hr/>
                    <h4>Tổng tiền: <h2 className="payModel__informationUser-sumTotal">{this.onSumTotalPay(cart)}₫</h2> </h4>                
                </Paper>
                <Paper elevation={3} className="payModel__informationProduct">
                    <h4>Thông tin mặt hàng thanh toán</h4>
                    <hr/>
                    <table class="table table-striped table-inverse table-responsive">
                            <tbody>
                                {this.showModalPay(cart)}
                            </tbody>
                    </table>
                </Paper>
            </div>
        )
    }
}
