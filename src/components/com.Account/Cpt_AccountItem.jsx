import React, { Component } from 'react';

class Cpt_AccountItem extends Component {
    onSumTotal=(payCart)=>{
        let total=0;
        if(payCart.length > 0 ){
            for(let i = 0 ; i < payCart.length ; i ++){
                total += payCart[i].product.sale * payCart[i].quantity;
            }
        }
        return total.toLocaleString();

    }
    onShowTitle=(payCart)=>{
        let title = ""
        if(payCart.length > 0){
            for(let i = 0 ; i < payCart.length; i++){
                title += payCart[i].product.title +'- Số lượng: '+ payCart[i].quantity +" |  "
            }
        }
        return title
    }
    render() {
        let {index,payCart}=this.props
        return (
            <tr>
                <td className="accountColSTT">{index + 1}</td>
                <td className="accountColMatHang">{this.onShowTitle(payCart)}</td>
                <td className="accountColTongTien">{this.onSumTotal(payCart)}</td>
            </tr>
        );
    }
}

export default Cpt_AccountItem;