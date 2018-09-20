import React, { Component } from "react";
import "./Test.css";

export class Image extends Component {
  constructor(props) {
    super(props);

    this.state.resourcepath = this.props.resourcepath;
  }

  state = {
    resourcepath: ""
  };

  componentDidMount() {}

  render() {
    return (
      <svg
        className="svg-container"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <image href={this.state.resourcepath} height="100%" width="100%" />
      </svg>
    );
  }
}
