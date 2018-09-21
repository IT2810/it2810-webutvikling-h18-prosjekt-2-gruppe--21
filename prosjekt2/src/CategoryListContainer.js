import React, { Component } from "react";
import axios from "axios";
import Category from "./CategoryList";


export class CategoryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state.parent = props.parent;
  }

  state = {
    imageJSON: null,
    textJSON: null,
    soundJSON: null,
    imageTabIndexes: [],
    textTabIndexes: [],
    soundTabIndexes: [],
    parent: null
  };

  getShuffledIndexes = () => {
    let idxArray = [0, 1, 2, 3];
    for (let i = 3; i > 0; i--) {
      let randIdx = Math.floor(Math.random() * (i + 1));
      [idxArray[i], idxArray[randIdx]] = [idxArray[randIdx], idxArray[i]];
    }

    return idxArray;
  };

  // Called from app to get resource paths from json for tab index supplied
  getResourcePaths = tabIndex => {
    //console.log(tabIndex);
    let image = this.state.imageJSON[this.refs.images.state.currentCategory][
      this.state.imageTabIndexes[tabIndex]
    ];
    let text = this.state.textJSON[this.refs.texts.state.currentCategory][
      this.state.textTabIndexes[tabIndex]
    ];
    let sound = this.state.soundJSON[this.refs.sounds.state.currentCategory][
      this.state.soundTabIndexes[tabIndex]
    ];
    return [image, text, sound];
  };

  // Generate new indexes and call loadresources, chained callbacks
  handleCategorySubmit = () => {
    this.setState({ imageTabIndexes: this.getShuffledIndexes() }, () => {
      this.setState({ textTabIndexes: this.getShuffledIndexes() }, () => {
        this.setState({ soundTabIndexes: this.getShuffledIndexes() }, () => {
          this.state.parent.loadResources(this);
        });
      });
    });
  };

  componentDidMount() {
    // Grab resource paths from JSON
    axios
      .get(`/resource.json`)
      .then(res => {
        this.setState({ imageJSON: res.data.images });
        this.setState({ textJSON: res.data.texts });
        this.setState({ soundJSON: res.data.sounds });
      })
      .then(() => {
        // initialize random tab indexes
        this.setState({ imageTabIndexes: this.getShuffledIndexes() });
        this.setState({ textTabIndexes: this.getShuffledIndexes() });
        this.setState({ soundTabIndexes: this.getShuffledIndexes() });
      })
      .then(() => {
        this.state.parent.loadResources(this);
      });

    // add .then to call load complete in app, to then start pulling in the media
  }

  render() {
    return (
      <div>
        <div className="category-container">
          <Category
            title={"Image"}
            cat1={"Forest"}
            cat2={"Mountain"}
            cat3={"Sea"}
            ref="images"
          />
          <Category
            title={"Texts"}
            cat1={"Haiku"}
            cat2={"Limericks"}
            cat3={"Rhymes"}
            ref="texts"
          />
          <Category
            title={"Sounds"}
            cat1={"Birds"}
            cat2={"Rivers and Waves"}
            cat3={"Weather"}
            ref="sounds"
          />
        </div>
        <button type="submit" onClick={() => this.handleCategorySubmit()}>
          Generate
        </button>
      </div>
    );
  }
}
