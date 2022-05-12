import React, { Component } from "react";
import Profile from "./component/Profile";

export class App extends Component {
  state = {
    isVisible: false,
  };

  toggleClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <>
        {this.state.isVisible ? <Profile /> : null}
        <button className="primary center" onClick={this.toggleClick}>
          {this.state.isVisible ? "Hide profile" : "Show profile"}
        </button>
      </>
    );
  }
}

export default App;
