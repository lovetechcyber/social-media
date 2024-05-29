// src/components/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import LineChart from '../charts/LineChart';
import GeoChart from '../charts/GeoChart';
import { fetchData } from '../api/Api';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };

    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Social Media Analytical Dashboard</h1>
      <div className="chart-container">
        <div className="chart-box">
          <BarChart data={data.barChart} />
        </div>
        <div className="chart-box">
          <PieChart data={data.pieChart} />
        </div>
        <div className="chart-box">
          <LineChart data={data.lineChart} />
        </div>
        <div className="chart-box">
          <GeoChart data={data.geoChart} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
