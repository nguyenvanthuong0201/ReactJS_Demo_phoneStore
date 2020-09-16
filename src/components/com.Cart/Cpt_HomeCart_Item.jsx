import React, { Component } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import *as Message from "../../constants/Messages"

class Cpt_HomeCart_Item extends Component {
  constructor(props) {
    super(props);
    this.state={
      quantity : 1,
    }
  }
  
  sumTotal=(sale,quantity)=>{
    return (sale*quantity).toLocaleString();
  }
  onDeleteCart=(product)=>{
    this.props.onDeleteCart(product)
    this.props.onDeleteMessage(Message.MSG_DELETE_CARD_SUCCESS)
    this.props.onOpenSnackbar()
  }
  onUpdateCart=(product,quantity)=>{
    if(quantity > 0) {
      this.setState({
        quantity:quantity
      })
      this.props.onUpdateCart(product,quantity);
      this.props.onUpdateMessage(Message.MSG_UPDATE_CARD_SUCCESS);
      this.props.onOpenSnackbar()
    }
  }
  render() {
    let { item } = this.props;
    return (
      <tr className="cartProduct_tr">
        <td>
          <IconButton className="cartButtonDelete" onClick={()=>this.onDeleteCart(item.product)}>
            <ClearIcon />
          </IconButton>
        </td>
        <td className="cartImg">
          <img src={item.product.img} alt={item.product.alt} />
        </td>
        <td>{item.title}</td>
        <td className="cost">{(item.product.sale).toLocaleString()} ₫</td>
        <td className="cartAddRemove">
          <IconButton className="cartButtonRemove" onClick={()=>this.onUpdateCart(item.product,item.quantity - 1)}>
            <RemoveCircleIcon />
          </IconButton>
          <b>{item.quantity}</b>
          <IconButton className="cartButtonAdd" onClick={()=>this.onUpdateCart(item.product,item.quantity + 1)}>
            <AddCircleIcon />
          </IconButton>
        </td>
        <td className="cost">{this.sumTotal(item.product.sale,item.quantity)} ₫</td>
      </tr>
    );
  }
}

export default Cpt_HomeCart_Item;
