import { hot } from "react-hot-loader/root";
import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      timer: new Date(),
    };
  }

  setTime() {
    this.setState({
      timer: new Date(),
    });
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setTime();
    }, 1000);return interval;
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <>
        <button onClick={() => this.handleClick()}>
          Hello component {this.state.counter}
        </button>
        <h1>This is hot module</h1>
        <h1>The time is: {this.state.timer.toLocaleTimeString()}</h1>
      </>
    );
  }
}

export default hot(Button);
