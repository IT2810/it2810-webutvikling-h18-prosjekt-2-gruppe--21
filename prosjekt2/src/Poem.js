import React, { Component } from "react";

export class Poem extends Component {
  state = { texts: [" "] };

  render() {
    //console.log(this.state.texts);
    let string = "";
    for (var i = 0; i < this.state.texts.length; i++) {
      string += this.state.texts[i] + "<br />";
    }
    return <h2 dangerouslySetInnerHTML={{ __html: string }} />;
  }
}
