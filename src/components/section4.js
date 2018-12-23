import React, { Component } from "react";
import LeftSide from "./section4/left-side.js";
import RightSide from "./section4/right-side.js";
import "../App.css";

class Section4 extends Component {
  render() {
    return (
      <div className="section4">
        <LeftSide />
        <RightSide />
      </div>
    );
  }
}

export default Section4;
