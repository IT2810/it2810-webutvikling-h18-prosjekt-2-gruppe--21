import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "./Test.css";
import { CategoryListContainer } from "./CategoryListContainer.js";
import { Image } from "./Image.js";
import { Poem } from "./Poem.js";
import { Audio } from "./Audio.js";
import { Tab } from "./Tab.js";

//let imageDiv;

class Test extends Component {
  constructor(props) {
    super(props);

    this.categoryContainer = React.createRef();
    this.tab0 = React.createRef();
    this.tab1 = React.createRef();
    this.tab2 = React.createRef();
    this.tab3 = React.createRef();

    this.state.tabs = [this.tab0, this.tab1, this.tab2, this.tab3];
  }

  state = {
    activeTabIndex: 0,
    tabs: []
  };

  handleTabClicked = clickedTab => {
    // update tab activation status
    console.clear();
    this.state.tabs.forEach(tab => {
      console.log(tab.current.state.active);
      tab.current.setState({ active: false });
    });

    clickedTab.setState({ active: true });

    this.setState({ tabIndex: clickedTab.state.tabIndex }, () => {
      this.loadResources(this.categoryContainer.current);
    });
  };

  loadResources = CategoryContainer => {
    let paths = CategoryContainer.getResourcePaths(this.state.activeTabIndex);
    console.log(paths);
    this.refs.image.setState({ resourcepath: paths[0] });
    this.refs.poem.setState({ texts: paths[1] });
    this.refs.audio.setState({ resourcepath: paths[2] });
  };

  render() {
    return (
      <div className="grid-container">
        <div className="visual-display">
          <div className="title">
            <h1>Nature</h1>
          </div>
          <div className="tab-container">
            <Tab
              ref={this.tab0}
              tabIndex="0"
              tabTitle="1"
              active={true}
              parent={this}
            />
            <Tab ref={this.tab1} tabIndex="1" tabTitle="2" parent={this} />
            <Tab ref={this.tab2} tabIndex="2" tabTitle="3" parent={this} />
            <Tab ref={this.tab3} tabIndex="3" tabTitle="4" parent={this} />
          </div>
          <div className="image">
            <Image ref="image" />
          </div>
          <div className="poem">
            <Poem ref="poem" />
          </div>
          <div>
            <Audio ref="audio" />
          </div>
        </div>
        <div className="categories" />
        <CategoryListContainer ref={this.categoryContainer} parent={this} />
      </div>
    );
  }
}

export default Test;
