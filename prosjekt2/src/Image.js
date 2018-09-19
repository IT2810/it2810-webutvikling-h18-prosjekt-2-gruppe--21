import React, { Component } from "react";

export class Image extends Component {
  render() {
    return (
      <div className="image-container">
        <svg className="svg-container">
          <image width="100%" height="100%" href="/img/forest0.svg" />
        </svg>
      </div>
    );
  }
}
