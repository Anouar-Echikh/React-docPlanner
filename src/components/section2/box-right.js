import React, { Component } from "react";
import img from "../../images/screen-saas@2x.png";
import "../../App.css";

class BoxRight extends Component {
  render() {
    return (
      <div className="boxs-section2" id="box-blue">
        <h4>For patients</h4>
        <p>Find a doctor, book a visit and solve any health-related doubt</p>
        <div class="transition-img2">
          <img width="397" height="248" src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default BoxRight;
