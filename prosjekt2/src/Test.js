
import React, { Component } from 'react';
import logo from './logo.svg';
import './Test.css';
import {Category} from './Category.js';

class Test extends Component {
  render() {
    return (
        <div className="grid-container">
            <div className="visual-display">
                <div className="title">
                </div>
                <div className="tab-container">
                  <div className="tab" id="0"></div>
                  <div className="tab" id="1"></div>
                  <div className="tab" id="2"></div>
                  <div className="tab" id="3"></div>
                </div>
                <div className="image">

                </div>
                <div className="poem">

                </div>
                
            </div>
            <div className="categories">
                <Category />
            </div>
      </div>
    );
  }
}

export default Test;
