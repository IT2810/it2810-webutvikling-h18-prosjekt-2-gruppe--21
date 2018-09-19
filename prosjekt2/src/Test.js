import React, { Component } from "react";
import logo from "./logo.svg";
import "./Test.css";

class Test extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="visual-display">
          <div className="title" />
          <div className="tab-container">
            <div className="tab" id="0" />
            <div className="tab" id="1" />
            <div className="tab" id="2" />
            <div className="tab" id="3" />
          </div>
          <div className="image" />
          <div className="poem" />
        </div>
        <div className="categories">
          <h1>TEST</h1>
        </div>
      </div>
    );
  }
}

export default Test;
