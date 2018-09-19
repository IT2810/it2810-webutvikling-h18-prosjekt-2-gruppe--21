import React, { Component } from "react";
import Category from "./Category";

export class CategoryContainer extends Component {
  state = {
    imageCategory: null,
    textCategory: null,
    soundCategory: null
  };

  handleChecked = element => {
    console.log("Image: " + this.state.imageCategory.state.currentCategory);
    console.log("Text: " + this.state.textCategory.state.currentCategory);
    console.log("Sound: " + this.state.soundCategory.state.currentCategory);
  };

  componentDidMount() {
    this.setState(state => {
      state.imageCategory = this.refs.images;
      state.textCategory = this.refs.texts;
      state.soundCategory = this.refs.sounds;
    });
  }

  render() {
    return (
      <div className="radioButtons">
        <Category
          title={"Image"}
          cat1={"Forest and rivers"}
          cat2={"Birds and oceans"}
          cat3={"Mountains"}
          parent={this}
          ref="images"
        />
        <Category
          title={"Texts"}
          cat1={"Forest and rivers"}
          cat2={"Birds and oceans"}
          cat3={"Mountains"}
          parent={this}
          ref="texts"
        />
        <Category
          title={"Sounds"}
          cat1={"Forest and rivers"}
          cat2={"Birds and oceans"}
          cat3={"Mountains"}
          parent={this}
          ref="sounds"
        />
      </div>
    );
  }
}

// <div className="radioButtons">
// <div className="radioGroup" id="1">
//     <h2>Image</h2>
//     <label className="radioButton">Skog og bekkefar</label>
//     <input type = "radio"
//       name = "image"
//     />
//      <label className="radioButton">Fugler og hav</label>
//     <input type = "radio"
//       name = "image"/>
//     <label className="radioButton">Fjell og vidde</label>
//     <input type = "radio"
//       name = "image"/>
// </div>
// <div className="radioGroup" id="2">
//     <h2>Sound</h2>
//     <label className="radioButton">Skog og bekkefar</label>
//     <input type = "radio"
//       name = "sound"/>
//     <label className="radioButton">Fugler og hav</label>
//     <input type = "radio"
//       name = "sound"/>
//     <label className="radioButton">Fjell og vidde</label>
//     <input type = "radio"
//       name = "sound"/>

// </div>
// <div className="radioGroup" id="3">
//     <h2>Text</h2>
//      <label className="radioButton">Skog og bekkefar</label>
//      <input type = "radio"
//         name = "text"/>
//      <label className="radioButton">Fugler og hav</label>
//      <input type = "radio"
//         name = "text"/>
//       <label className="radioButton">Fjell og vidde</label>
//       <input type = "radio"
//         name = "text"/>
// </div>
// </div>
