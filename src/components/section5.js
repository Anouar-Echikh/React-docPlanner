import React, { Component } from "react";
import HeaderSlider from "./section5/header-slider.js";
import Slider from "./section5/slider.js";
import "../App.css";

class Section5 extends Component {
  render() {
    return (
      <div className="section5">
        <HeaderSlider />
        <Slider />
      </div>
    );
  }
}

export default Section5;
