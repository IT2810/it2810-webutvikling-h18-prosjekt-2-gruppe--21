
import React, { Component } from 'react';
import logo from './logo.svg';
import './category.css';

export class Category extends Component {
  render() {
    return (
      <div className="radioButtons">
        <div className="radioGroup" id="1">
            <h2>Image</h2>
            <label className="radioButton">Skog og bekkefar</label>
            <input type = "radio"
                name = "radSize"
                value = "small"
                checked = "checked" />
             <label className="radioButton">Fugler og hav</label>
             <input type = "radio"
                name = "radSize"
                value = "medium" />
             <label className="radioButton">Fjell og vidde</label>
             <input type = "radio"
                name = "radSize"
                value = "large" /> 
        </div>
        <div className="radioGroup" id="2">
            <h2>Sound</h2>
            <label className="radioButton">Skog og bekkefar</label>
            <input type = "radio"
                name = "radSize"
                value = "small"
                checked = "checked" />
            <label className="radioButton">Fugler og hav</label>
            <input type = "radio"
                name = "radSize"
                value = "medium" />
              <label className="radioButton">Fjell og vidde</label>
              <input type = "radio"
                name = "radSize"
                value = "large" /> 
        </div>
        <div className="radioGroup" id="3">
            <h2>Text</h2>
             <label className="radioButton">Skog og bekkefar</label>
             <input type = "radio"
                name = "radSize"
                value = "small"
                checked = "checked" />
             <label className="radioButton">Fugler og hav</label>
             <input type = "radio"
                name = "radSize"
                value = "medium" />
              <label className="radioButton">Fjell og vidde</label>
              <input type = "radio"
                name = "radSize"
                value = "large" /> 
        </div>
      </div>
    );
  }
}


