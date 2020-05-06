/**
 * @Author: Ali
 * @Date:   2020-05-05T22:54:53+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-06T14:54:38+02:00
 */

import React, { Component } from "react";
import Container from "./components/Container";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

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
  render() {
    console.log(this.state.geoLoc.lon, this.state.geoLoc.lat);
    return (
      <div className="">
        <Container />
      </div>
    );
  }
}

export default App;
