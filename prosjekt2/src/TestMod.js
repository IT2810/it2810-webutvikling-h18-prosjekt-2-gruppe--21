import React, { Component } from "react";
import "./Test.css";
import { CategoryListContainer } from "./CategoryListContainer.js";
import { Image } from "./Image";

class Test extends Component {
  state = {
    tabindex: 0
  };

  loadResources = CategoryContainer => {
    let paths = CategoryContainer.getResourcePaths(this.state.tabindex);
    console.log(paths);
  };

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
          <div
            className="image"
            style={{
              width: "100%",
              height: "60%",
              border: "2px solid black"
            }}
          >
            <Image ref="image" />
          </div>
          <div className="poem" ref="poem" />
        </div>
        <audio ref="audio" autoPlay={true} />
        <div className="categories" />
        <CategoryListContainer parent={this} />
      </div>
    );
  }
}

export default Test;
