import React, { Component } from "react";

class AddOption extends Component {
  state = {
    option: "",
    error: undefined
  };

  handleOnChange = e => {
    const option = e.target.value.trim();
    this.setState(() => {
      return {
        option
      };
    });
  };

  handleOnSubmit = e => {
    const { option } = this.state;
    const { handleOnSubmit } = this.props;
    e.preventDefault();
    const error = handleOnSubmit(option);

    this.setState(() => {
      return {
        error
      };
    });
    if (!error) {
      this.setState({
        option: ""
      });
    }
  };
  render() {
    const { error } = this.state;
    return (
      <form className="add-option" onSubmit={this.handleOnSubmit}>
        {error && <p className="add-option-error">{error}</p>}
        <input
          className="add-option__input"
          type="text"
          value={this.state.option}
          onChange={this.handleOnChange}
        />
        <button className="sm-button">Add Option</button>
      </form>
    );
  }
}

export default AddOption;
