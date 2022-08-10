import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <a
        onClick={this.props.onClick}
        className={"controls__item " + this.props.color}
        data-value={this.props.value}
      >
        {this.props.name}
      </a>
    );
  }
}
