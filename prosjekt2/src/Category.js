import React, { Component } from "react";
import logo from "./logo.svg";
import "./category.css";

export class Category extends Component {
  generateIndexArray() {
    console.log("works");
    let idxArray = [0, 1, 2, 3];
    let curIdx = idxArray.length,
      rndIdx,
      temp;

    while (curIdx > 0) {
      console.log("looping");
      curIdx -= 1;
      rndIdx = Math.floor(Math.random() * curIdx);
      temp = idxArray[curIdx];
      idxArray[curIdx] = idxArray[rndIdx];
      idxArray[rndIdx] = temp;
    }
    console.log(idxArray);
  }

export default class Category extends Component {
  state = {
    title: this.props.title,
    cat1: this.props.cat1,
    cat2: this.props.cat2,
    cat3: this.props.cat3,
    parent: this.props.parent,
    currentCategory: 0
  };


  onChecked = categoryIndex => {
    this.setState(
      { currentCategory: categoryIndex },
      this.props.parent.handleChecked(this)
    );
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <input
          type="radio"
//          name={this.state.title}
          onChange={() => this.onChecked(0)}
          checked={this.state.currentCategory === 0}
        />
        {this.props.cat1}
        <br />
        <input
          type="radio"
//          name={this.state.title}
          onChange={() => this.onChecked(1)}
          checked={this.state.currentCategory === 1}
        />
        {this.props.cat2}
        <br />
        <input
          type="radio"
//          name={this.state.title}
          onChange={() => this.onChecked(2)}
          checked={this.state.currentCategory === 2}
        />
        {this.props.cat3}
      </div>
    );
  }
}
