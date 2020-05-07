/**
 * @Author: Ali
 * @Date:   2020-05-05T22:54:53+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-07T10:13:53+02:00
 */

import React, { Component } from "react";
import Container from "./components/Container";

import "./app.css";

const endpoint = "http://ip-api.com/json";

class App extends Component {
  state = {
    geoLoc: {}
  };

  componentDidMount() {
    fetch(endpoint)
      .then(geoLoc => geoLoc.json())
      .then(geoLoc => {
        this.setState({ geoLoc: geoLoc });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleClick = () => {
    console.log("clicked");
  };
  render() {
    if (this.state.geoLoc.lat === undefined) {
      return <div className="loading">loading ...</div>;
    } else {
      return (
        <div className="">
          <Container position={this.state.geoLoc} />
        </div>
      );
    }
  }
}

export default App;
