import React, { Component } from "react";

export class Poem extends Component {
  state = { 
    text: ""
  }
  
  render() {
    return <h2 dangerouslySetInnerHTML={{ __html: this.state.text }} />;
  }
}
