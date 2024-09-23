import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: -15, name: "United States", coordinates: [-100.0, 40.0] },
  { markerOffset: -15, name: "Brazil", coordinates: [-47.9292, -15.7801] },
  { markerOffset: -15, name: "Germany", coordinates: [10.4515, 51.1657] },
  { markerOffset: -15, name: "India", coordinates: [78.9629, 20.5937] },
  { markerOffset: -15, name: "Australia", coordinates: [133.7751, -25.2744] },
  { markerOffset: -15, name: "South Africa", coordinates: [22.9375, -30.5595] },
  { markerOffset: -15, name: "China", coordinates: [104.1954, 35.8617] },
];

const MapChart = () => {
  return (
    <ComposableMap projectionConfig={{ scale: 200 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#D6D6DA"
              stroke="#FFFFFF"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F53" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
