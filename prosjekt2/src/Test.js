import React, { Component } from "react";
import logo from "./logo.svg";
import "./Test.css";
import { Category } from "./Category.js";
import { Image } from "./Image.js";
import { Poem } from "./Poem.js";

let imageDiv;

class Test extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
  }

  render() {
    return (
      <div className="grid-container">
        <div className="visual-display">
          <div className="title">
            <h1>Nature</h1>
          </div>
          <div className="tab-container">
            <div className="tab" id="0">
              <h2>Tab 1</h2>
            </div>
            <div className="tab" id="1">
              <h2>Tab 2</h2>
            </div>
            <div className="tab" id="2">
              <h2>Tab 3</h2>
            </div>
            <div className="tab" id="3">
              <h2>Tab 4</h2>
            </div>
          </div>
          <div className="image" ref={this.myInput}>
            <Image />
          </div>
          <div className="poem">
            <Poem />   
          </div>
        </div>
        <div className="categories">
          <Category />
        </div>
      </div>
    );
  }
}

export default Test;
