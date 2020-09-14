import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";

export default class MessageChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open:true,
      vertical: "bottom",
      horizontal: "left",
    };
  }
  render() {
    let { message } = this.props;
    let {vertical,horizontal,open}=this.state
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={message}
          key={vertical + horizontal}
        />
      </div>
    );
  }
}
