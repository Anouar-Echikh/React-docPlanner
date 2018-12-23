import React, { Component } from "react";
import Header from "./components/header.js";
import Section1 from "./components/section1.js";
import Section2 from "./components/section2.js";
import Section3 from "./components/section3.js";
import Section4 from "./components/section4.js";
import Section5 from "./components/section5.js";
import Footer from "./components/footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    );
  }
}

export default App;
