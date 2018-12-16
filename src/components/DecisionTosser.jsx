import React, { Component } from "react";
import OptionsList from "./OptionsList";
import Header from "./Header";
import AddOption from "./AddOption";
import Decision from "./Decision";
import OptionalModal from "./OptionModal";

class DecisionTosser extends Component {
  state = {
    options: ["Walking", "Sleeping", "Working"],
    selectedOption: undefined
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({
          options
        }));
      }
    } catch (error) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleOnSubmit = option => {
    if (!option) {
      return "Please Enter Valid Option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "The Option already exists";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  handleRemoveAll = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  singleOptionRemoval = optionId => {
    const optionToremove = this.state.options[optionId];
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return option !== optionToremove;
      })
    }));
  };
  closingModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  render() {
    const { options, selectedOption } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <Decision
            handlePick={this.handlePick}
            hasOption={options.length > 0}
          />
          <div className="widget">
            <OptionsList
              options={options}
              handleRemoveAll={this.handleRemoveAll}
              singleOptionRemoval={this.singleOptionRemoval}
            />
            <AddOption handleOnSubmit={this.handleOnSubmit} />
          </div>
        </div>

        <OptionalModal
          selectedOption={selectedOption}
          closingModal={this.closingModal}
        />
      </div>
    );
  }
}

export default DecisionTosser;
