import React, { Component } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import *as Message from "../../constants/Messages"


export default class Cpt_PayItem extends Component {
    onDeleteCart=(product)=>{
        this.props.onDeleteCart(product)
        this.props.onDeleteMessage(Message.MSG_DELETE_CARD_SUCCESS)
        this.props.onOpenSnackbar()
      }
    onSumTotal=(sale,quantity)=>{
        return (sale*quantity).toLocaleString()
    }
    render() {
        let{item}=this.props
        return (
            <tr className="rowPayItem">
                <td className="rowDeletePay"><IconButton onClick={()=>this.onDeleteCart(item.product)}><CloseIcon className="closeButtonPayItem"/></IconButton></td>
                <td className="rowSalePay">{item.product.title}<b> x </b>{item.quantity}</td>
                <td className="rowSumPay">{this.onSumTotal(item.product.sale,item.quantity)} ₫</td>
            </tr>
        )   
    }
}
