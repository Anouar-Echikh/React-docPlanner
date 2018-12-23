import React, { Component } from "react";

import "../../App.css";

class RightSide extends Component {
  render() {
    return (
      <div class="section4-right">
        <div class="col1">
          <div class="section4-element" id="el1">
            <img
              scr="https://www.docplanner.com/img/flag.png"
              srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"
            />
            <h3>Leader in 8&nbsp;countries</h3>
            <p>
              Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile
            </p>
          </div>

          <div class="section4-element" id="el2">
            <img
              scr="https://www.docplanner.com/img/patients.png"
              srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"
            />
            <h3>20 million unique patients</h3>
            <p>visit us every month</p>
          </div>
        </div>

        <div class="col2">
          <div class="section4-element" id="el3">
            <img
              scr="https://www.docplanner.com/img/visits.png"
              srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"
            />
            <h3>600 000 appointments</h3>
            <p>booked last month</p>
          </div>
          <div class="section4-element" id="el4">
            <img
              scr="https://www.docplanner.com/img/doctors.png"
              srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"
            />
            <h3>35 000 active doctors</h3>
            <p>trust in&nbsp;our solutions</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSide;
