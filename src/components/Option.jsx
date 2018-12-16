import React, { Component } from "react";

class Option extends Component {
  render() {
    return (
      <div className="option">
        <p className="option__text">
          {this.props.count}. {this.props.option}
        </p>

        <button
          className="sm-button sm-button--link"
          onClick={() => {
            this.props.singleOptionRemoval(this.props.optionId);
          }}
        >
          X
        </button>
      </div>
    );
  }
}
export default Option;
