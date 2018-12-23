import React, { Component } from "react";
import logo from "../images/logo-default-group-en.svg";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href={"#"} className="header-logo">
          <img height="33px" width="268px" src={logo} alt="" />
        </a>
        <div className="nav-bar">
          <a className="a-vert" href={""}>
            About us
          </a>
          <a href={""}>Career</a>
          <a className="depart-drop" href={""}>
            Department
          </a>
          <div id="dropdown">
            <a href={""}>Marketing & PR</a>
            <a href={""}>Costumer Success & Sales</a>
            <a href={""}>It, Product, Design & UX</a>
            <a href={""}>Finance & Administration</a>
            <a href={""}>HR & More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
