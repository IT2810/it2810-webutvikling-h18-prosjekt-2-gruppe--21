import React, { Component } from "react";
import logo from "./logo.svg";
import "./categories.css";

export default class CategoryList extends Component {
  state = {
    title: this.props.title,
    cat1: this.props.cat1,
    cat2: this.props.cat2,
    cat3: this.props.cat3,
    currentCategory: 0
  };

  onChecked = categoryIndex => {
    this.setState({ currentCategory: categoryIndex });
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
