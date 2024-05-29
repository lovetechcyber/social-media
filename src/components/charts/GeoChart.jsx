// src/components/GeoChart.js
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const GeoChart = ({ data }) => {
  return (
    <ComposableMap>
      <Geographies geography="/path-to-your-geojson-file">
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={data[geo.id] ? 'red' : '#DDD'}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default GeoChart;
