import React, { Component } from "react";

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
          name={this.state.title}
          onClick={() => this.onChecked(0)}
          defaultChecked={true}
        />
        {this.props.cat1}
        <br />
        <input
          type="radio"
          name={this.state.title}
          onClick={() => this.onChecked(1)}
        />
        {this.props.cat2}
        <br />
        <input
          type="radio"
          name={this.state.title}
          onClick={() => this.onChecked(2)}
        />
        {this.props.cat3}
      </div>
    );
  }
}
