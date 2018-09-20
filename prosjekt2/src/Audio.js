import React, { Component } from "react";

export class Audio extends Component {
  state = { path: this.props.path };
  render() {
    return (
      <div>
        <h1>{this.state.path}</h1>
        <h1>This is the audio component</h1>
      </div>
    );
  }
}
