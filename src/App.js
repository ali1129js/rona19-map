/**
 * @Author: Ali
 * @Date:   2020-05-05T22:54:53+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-21T09:49:18+02:00
 */

import React, { Component } from "react";
import Container from "./components/Container";

import "./app.css";

class App extends Component {
  state = {
    geoLoc: {}
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.setState({ geoLoc: position.coords });
      });
    } else {
      console.log("geolocation is NOT available");
    }
  }

  render() {
    if (this.state.geoLoc === undefined) {
      return <div className="loading">loading ...</div>;
    } else {
      return (
        <div className="app">
          <Container position={this.state.geoLoc} />
        </div>
      );
    }
  }
}

export default App;
