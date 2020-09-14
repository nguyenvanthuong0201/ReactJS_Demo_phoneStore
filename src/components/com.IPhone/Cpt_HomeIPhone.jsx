import React, { Component } from "react";

export default class Cpt_HomeIPhone extends Component {
  render() {
    return (
      <div>
        <div className="row rowHeaderIphone mt-4 mb-4">
          <div className="col-sm-6">
            <img src="img/PicHeadIPhone.png" alt="" />
          </div>
          <div className="col-sm-6">
            <img src="img/PicHeadIPhone2.png" alt="" />
          </div>
        </div>
        <div className="row rowTilteIphone">
          <div className="col-sm-12">
            <h5> I Phone</h5>
          </div>
        </div>
        <div className="IPhoneCartContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}
