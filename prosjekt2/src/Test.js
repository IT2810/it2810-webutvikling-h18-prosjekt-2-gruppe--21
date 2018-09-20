import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Test.css";
import { CategoryListContainer } from "./CategoryListContainer.js";
import { Image } from "./Image.js";
import { Poem } from "./Poem.js";
import { Audio } from "./Audio.js";

let imageDiv;

class Test extends Component {
  state = {
    tabindex: 0
  };

  loadResources = CategoryContainer => {
    let paths = CategoryContainer.getResourcePaths(this.state.tabindex);
    console.log(paths);
    this.refs.image.setState({ resourcepath: paths[0] });
    this.refs.audio.setState({ resourcepath: paths[2] });
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
          <div className="image">
            <Image ref="image" />
          </div>
          <div className="poem">
            <Poem />
          </div>
          <div>
            <Audio ref="audio" />
          </div>
        </div>
        <div className="categories" />
        <CategoryListContainer parent={this} />
      </div>
    );
  }
}

export default Test;
