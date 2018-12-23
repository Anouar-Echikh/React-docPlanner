import React, { Component } from "react";
import img from "../../images/screen-marketplace@2x.png";
import "../../App.css";

class BoxLeft extends Component {
  render() {
    return (
      <div className="boxs-section2" id="box-vert">
        <h4>For patients</h4>
        <p>Find a doctor, book a visit and solve any health-related doubt</p>
        <select name="" id="list-selection">
          <option>Choose country</option>
          <option value="http://www.doctoraliar.com">Argentina</option>
          <option value="http://www.doctoralia.com.au">Australia</option>
          <option value="http://www.doctoralia.com.br">Brazil</option>
          <option value="http://www.doctoralia.cl">Chile</option>
          <option value="http://www.doctoralia.co">Colombia</option>
          <option value="http://www.znamylekar.cz">Czech</option>
          <option value="http://www.doctoralia-fr.com">France</option>
          <option value="http://www.miodottore.it">Italy</option>
          <option value="http://www.doctoralia.com.mx">Mexico</option>
          <option value="http://www.doctoralia.pe">Peru</option>
          <option value="http://www.znanylekarz.pl">Poland</option>
          <option value="http://www.doctoralia.com.pt">Portugal</option>
          <option value="http://www.doctoralia.es">Spain</option>
          <option value="http://www.doktortakvimi.com">Turkey</option>
          <option value="http://www.doctoralia.co.uk">UK</option>
        </select>
        <div className="transition-img1">
          <img width="397" height="248" src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default BoxLeft;
