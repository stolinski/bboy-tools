import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Icon extends Component {
  render() {
    if (this.props.name === 'close') {
      return (
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 31.11 31.11"
          enableBackground="new 0 0 31.11 31.11"
          className="close"
          onClick={this.props.onClick}
        >
          <polygon
            fill={this.props.color}
            points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97   29.7,31.11 31.11,29.7 16.97,15.56 "
          />
        </svg>
      );
    }
    return (
      <div>
        <h1>Title</h1>
      </div>
    );
  }
}
