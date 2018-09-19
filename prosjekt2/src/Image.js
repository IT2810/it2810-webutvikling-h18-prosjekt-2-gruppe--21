import React, { Component } from "react";

export class Image extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <svg
        className="svg-container"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <image href="/img/mountain2.svg" height="100%" width="100%" />
      </svg>
    );
  }
}
