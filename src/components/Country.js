/**
 * @Author: Ali
 * @Date:   2020-05-07T10:25:34+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-07T14:09:44+02:00
 */
import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const Country = ({ country, position }) => {
  const endpoint = `https://covid19.mathdro.id/api/countries/${country}`;
  const [countryStats, setStats] = useState(null);
  useEffect(() => {
    fetch(endpoint)
      .then(results => results.json())
      .then(data => {
        setStats({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          deaths: data.deaths.value
        });
      });
  }, [endpoint]);
  if (countryStats === null) {
    return <div className="">{endpoint}</div>;
  } else {
    return (
      <Map center={position} zoom={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong> {country}</strong> <br />
            <div className="makeyellow">
              Confirmed :{countryStats.confirmed}
            </div>
            <div className="makegreen">
              Recovered : {countryStats.recovered}{" "}
            </div>
            <div className="makered"> Deaths: {countryStats.deaths}</div>
          </Popup>
        </Marker>
      </Map>
    );
  }
};

export default Country;
