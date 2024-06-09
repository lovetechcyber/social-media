import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
//import axios from 'axios';
import { useTheme } from '@mui/material';
import { mockPieData} from '../charts/mockData';


const PieChart = () => {
  const theme = useTheme();
  const colors = theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[800];
  const [data, setData] = useState([]);

  useEffect(() => {
/*     const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/pieData');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching pie data", error);
      }
    };
    fetchData(); */
    setData(mockPieData);
  }, []);

  return (
    <div style={{ height: '300px' }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor={colors}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor={colors}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemTextColor: colors,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 12,
            symbolShape: 'circle',
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
