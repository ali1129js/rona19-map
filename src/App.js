/**
 * @Author: Ali
 * @Date:   2020-05-05T22:54:53+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-05T23:24:06+02:00
 */

import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./app.css";

class App extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 6
  };
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default App;
