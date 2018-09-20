import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";

let element = "";
export class Poem extends Component {
  state = { texts: [] };

  render() {
    console.log(this.state.texts);
    let string = "";
    for (var i = 0; i < this.state.texts.length; i++) {
      string += this.state.texts[i] + "<br />";
    }
    return <h2 dangerouslySetInnerHTML={{ __html: string }} />;
  }
}
