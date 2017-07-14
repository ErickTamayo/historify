import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter__item filter__item--selected">All Songs</div>
      </div>
    );
  }
}

export default Filter;
