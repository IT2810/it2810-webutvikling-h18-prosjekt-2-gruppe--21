import React, { Component } from "react";

export class Audio extends Component {
  state = { resourcepath: null };
  render() {
    return <audio src={this.state.resourcepath} autoPlay={true} loop={true} />;
  }
}
