/**
 * @Author: Ali
 * @Date:   2020-05-06T14:42:36+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-07T10:12:28+02:00
 */
import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class Container extends Component {
  state = {
    zoom: 6
  };
  render() {
    console.log(this.props.position);
    const position = [this.props.position.lat, this.props.position.lon];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {this.props.position.city}
            <br />
            {this.props.position.country}
          </Popup>
        </Marker>
      </Map>
    );
  }
}
export default Container;
