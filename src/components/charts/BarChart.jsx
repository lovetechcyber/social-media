// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Bar Chart',
        data: data.values,
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
