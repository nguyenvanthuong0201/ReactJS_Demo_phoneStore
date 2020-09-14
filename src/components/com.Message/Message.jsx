import React, { Component } from "react";
import Alert from "@material-ui/lab/Alert";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import *as message from '../../constants/Messages'

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  setOpen = (bool) => {
    this.setState({
      isOpen: bool,
    });
  };
  render() {
    return (
      <div>
        {/* {alert(message.MSG_WELCOME)} */}


        {/* {this.state.isOpen === true ? (
          <Alert
            variant="filled"
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => this.setOpen(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
              {message.MSG_WELCOME}
          </Alert>
        ) : (
          ""
        )} */}



        {/* {this.state.isOpen && (        
                <Alert
            variant="filled"
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => this.setOpen(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Chào Mừng các bạn đã đến
          </Alert>
        )} */}
      </div>
    );
  }
}
