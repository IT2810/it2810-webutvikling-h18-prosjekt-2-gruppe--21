import React, { Component } from "react";
import axios from "axios"
import Category from "./Category";

export class CategoryContainer extends Component {
  state = {
    images: null,
    texts: null,
    sounds: null,
    imageCategory: 0,
    textCategory: 0,
    soundCategory: 0
  };

  handleChecked = element => {
    console.clear();
    console.log("Image: " + this.state.imageCategory.state.currentCategory);
    console.log("Text: " + this.state.textCategory.state.currentCategory);
    console.log("Sound: " + this.state.soundCategory.state.currentCategory);
  };

  componentDidMount() {
    // Set up refs
    this.setState(state => {
      state.imageCategory = this.refs.images;
      state.textCategory = this.refs.texts;
      state.soundCategory = this.refs.sounds;
    });
    // Grab resource paths from JSON
    axios.get(`/resource.json`).then(res => {
      const images = res.data.images;
      this.setState({ images });
      const texts = res.data.texts;
      this.setState({ texts });
      const audio = res.data.audio;
      this.setState({ audio });

      console.log(res.data.images[0]);
    });
  }

  render() {
    return (
      <div className="categoryContainer">
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
        <button type="submit">Generate</button>
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
