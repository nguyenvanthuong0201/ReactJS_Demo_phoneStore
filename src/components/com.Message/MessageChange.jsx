import React, { Component } from "react";
import { Button, IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

export default  class MessageChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vertical: "bottom",
      horizontal: "left",
    };
  }
  handleClose=()=>{
   this.props.onCloseSnackBar()
  } 
  render() {
    let { message,bool} = this.props;
    let { vertical, horizontal} = this.state;
    return (
        <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={bool}
          autoHideDuration={6000}
          message={message}
          onClose={this.handleClose}
          key={vertical + horizontal}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}

