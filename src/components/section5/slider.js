import React, { Component } from "react";

import "../../App.css";

class Slider extends Component {
  render() {
    return (
      <div className="img-slide">
        <a href="">
          <img
            scr="https://www.docplanner.com/images/warsaw.png"
            srcset="https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x"
          />
          <div className="under-img">
            Warsaw
            <button className="button-img">See openings</button>
          </div>
        </a>
        <a href="">
          <img
            scr="https://www.docplanner.com/images/barcelona.png"
            srcset="https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x"
          />
          <div className="under-img">
            Barcelona
            <button className="button-img">See openings</button>
          </div>
        </a>
        <a href="">
          <img
            scr="https://www.docplanner.com/images/istanbul.png"
            srcset="https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x"
          />
          <div className="under-img">
            Istanbul
            <button className="button-img">See openings</button>
          </div>
        </a>
        <a href="">
          <img
            scr="https://www.docplanner.com/images/rome.png"
            srcset="https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x"
          />
          <div className="under-img">
            Rome
            <button className="button-img">See openings</button>
          </div>
        </a>
        <a href="">
          <img
            scr="https://www.docplanner.com/images/mexico-city.png"
            srcset="https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x"
          />
          <div className="under-img">
            Mexico city
            <button className="button-img">See openings</button>
          </div>
        </a>
        <a href="">
          <img
            scr="https://www.docplanner.com/images/curitiba.png"
            srcset="https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x"
          />
          <div className="under-img">
            Curitiba
            <button className="button-img">See openings</button>
          </div>
        </a>
      </div>
    );
  }
}

export default Slider;
