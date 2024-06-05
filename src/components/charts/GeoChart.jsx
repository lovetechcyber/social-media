import React, { useEffect, useState } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import axios from 'axios';
import { useTheme } from '@mui/material';
import countries from './world_countries.json'; 

const GeoChart = () => {
  const theme = useTheme();
  const colors = theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[800];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/geoData');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching geo data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: '220px' }}>
      <ResponsiveChoropleth
        data={data}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 100000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={100}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: colors,
            itemOpacity: 0.85,
            symbolSize: 18,
          }
        ]}
      />
    </div>
  );
};

export default GeoChart;
