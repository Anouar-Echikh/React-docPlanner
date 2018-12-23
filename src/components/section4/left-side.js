import React, { Component } from "react";
import img from "../../images/Docplanner Group.png";
import "../../App.css";

class LeftSide extends Component {
  render() {
    return (
      <div class="section4-left">
        <div class="pub">
          <h1>
            The world's
            <br />
            biggest healthcare platform
          </h1>
          <p>
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
        </div>
        <img class="star-img" src={img} alt="" />
      </div>
    );
  }
}

export default LeftSide;
