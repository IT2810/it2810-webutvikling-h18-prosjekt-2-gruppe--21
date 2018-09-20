import React, { Component } from "react";
import axios from "axios"
import Category from "./CategoryList";


export class CategoryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state.parent = props.parent;
  }

  state = {
    currentImageCategory: 0,
    currentTextCategory: 0,
    currentSoundCategory: 0,
    imageJSON: null,
    textJSON: null,
    soundJSON: null,
    imageTabIndexes: [],
    textTabIndexes: [],
    soundTabIndexes: [],
    parent: null
  };
  
  
  getShuffledIndexes = () => {
    let idxArray = [0,1,2,3];
      for (let i = 3; i > 0; i--){
        let randIdx = Math.floor(Math.random() * (i+1));
        [ idxArray[i], idxArray[randIdx] ] = [ idxArray[randIdx], idxArray[i] ];
      }
    
    return idxArray;
  };

  // Generates and updates 4 tab index arrays, representing the indexes to use for each tab
  updateRandomizedTabIndexes = () => {
    this.setState({imageTabIndexes : this.getShuffledIndexes()});
    this.setState({textTabIndexes : this.getShuffledIndexes()});
    this.setState({soundTabIndexes : this.getShuffledIndexes()});  
  };

  // Called from app to get resource paths from json for tab index supplied
  getResourcePaths = (tabIndex) => {
    let image = this.state.imageJSON[this.state.currentImageCategory][this.state.imageTabIndexes[tabIndex]];
    let text = this.state.textJSON[this.state.currentTextCategory][this.state.textTabIndexes[tabIndex]];
    let sound = this.state.soundJSON[this.state.currentSoundCategory][this.state.soundTabIndexes[tabIndex]];
    return [image,text,sound];
  };

  handleCategorySubmit = () => {
    this.setState({currentImageCategory : this.refs.images.state.currentCategory});
    this.setState({currentTextCategory : this.refs.texts.state.currentCategory});
    this.setState({currentSoundCategory : this.refs.sounds.state.currentCategory});
    this.updateRandomizedTabIndexes();
    this.state.parent.loadResources(this);    
  };

  componentDidMount() {
    // Grab resource paths from JSON
    axios.get(`/resource.json`).then(res => {
      this.setState({ imageJSON : res.data.images });
      this.setState({ textJSON : res.data.texts });
      this.setState({ soundJSON : res.data.sounds });
    }).then(() => {
      // initialize random tab indexes
      this.setState({imageTabIndexes : this.getShuffledIndexes()});
      this.setState({textTabIndexes : this.getShuffledIndexes()});
      this.setState({soundTabIndexes : this.getShuffledIndexes()});
    }).then(() => {
      this.state.parent.loadResources(this);
    });
    
    // add .then to call load complete in app, to then start pulling in the media
  }

  render() {
    return (
      <div className="categoryContainer">
        <Category
          title={"Image"}
          cat1={"Forest"}
          cat2={"Mountain"}
          cat3={"Sea"}
          ref="images"
        />
        <Category
          title={"Texts"}
          cat1={"TextCat1"}
          cat2={"TextCat2"}
          cat3={"TextCat3"}
          ref="texts"
        />
        <Category
          title={"Sounds"}
          cat1={"Birds"}
          cat2={"Rivers and Waves"}
          cat3={"Weather"}
          ref="sounds"
        />
        <button type="submit" onClick={() => this.handleCategorySubmit()}>Generate</button>
      </div>
    );
  }
}
