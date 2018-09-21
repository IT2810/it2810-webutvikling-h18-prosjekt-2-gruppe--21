import React, { Component } from "react";

export class Tab extends Component {
  constructor(props) {
    super(props);
    this.state.tabIndex = this.props.tabIndex;
    this.state.tabTitle = this.props.tabTitle;
    this.state.active = this.props.active;
    this.state.parent = this.props.parent;
  }

  onTabClicked = () => {
    this.state.parent.handleTabClicked(this);
  };

  state = {
    tabIndex: 0,
    tabTitle: "",
    active: false,
    parent: null
  };

  render() {
    return (
      <div
        className={`tab ${this.state.active ? "tab-active" : "tab-inactive"}`}
        onClick={this.onTabClicked}
      >
        <h2>{this.state.tabTitle}</h2>
      </div>
    );
  }
}
