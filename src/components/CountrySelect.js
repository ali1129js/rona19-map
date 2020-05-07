/**
 * @Author: Ali
 * @Date:   2020-05-07T13:04:17+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-07T14:19:41+02:00
 */
import React, { Component } from "react";

class CountrySelect extends Component {
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
    let endpoint = `https://covid19.mathdro.id/api/countries/${this.props.country}`;
    return <div className="select"> s </div>;
  }
}
export default CountrySelect;
