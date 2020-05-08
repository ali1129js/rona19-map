/**
 * @Author: Ali
 * @Date:   2020-05-06T14:42:36+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-07T22:38:19+02:00
 */
import React, { Component } from "react";
import Country from "./Country";

class Container extends Component {
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
