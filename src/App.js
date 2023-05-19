import React from "react";

class BluebLock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
  }

  render() {
    return (
      <div className="container">
        <button
          className={this.state.color}
          onClick={() => this.setState({ color: "red" })}
        ></button>
        <Redblock />
      </div>
    );
  }
}

class Redblock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }

  render() {
    return (
      <button
        className={this.state.color}
        onClick={() => this.setState({ color: "blue" })}
      ></button>
    );
  }
}

export default BluebLock;
