/**
 * @Author: Ali
 * @Date:   2020-05-06T14:42:36+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-07T14:02:06+02:00
 */
import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import Country from "./Country";

class Container extends Component {
  state = {
    zoom: 6
  };
  render() {
    const position = [this.props.position.lat, this.props.position.lon];
    return (
      <>
        <Country country={this.props.position.country} position={position} />
      </>
    );
  }
}
export default Container;
