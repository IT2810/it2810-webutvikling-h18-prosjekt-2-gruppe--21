
import React, { Component } from 'react';
import logo from './logo.svg';
import './category.css';

export class Category extends Component {
  render() {
    return (
      <div className="radioButtons">
         <label className="radioButton">small</label>
         <input type = "radio"
                 name = "radSize"
                 id = "sizeSmall"
                 value = "small"
                 checked = "checked" />
          <label className="radioButton">medium</label>
          <input type = "radio"
                 name = "radSize"
                 id = "sizeMed"
                 value = "medium" />
          <label className="radioButton">large</label>
          <input type = "radio"
                 name = "radSize"
                 id = "sizeLarge"
                 value = "large" /> 
      </div>
    );
  }
}


