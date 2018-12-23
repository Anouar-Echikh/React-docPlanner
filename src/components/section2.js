import React, { Component } from "react";
import BoxLeft from "./section2/box-left.js";
import BoxRight from "./section2/box-right.js";
import "../App.css";

class Section2 extends Component {
  render() {
    return (
      <div className="section2">
        <BoxLeft />
        <BoxRight />
      </div>
    );
  }
}

export default Section2;
