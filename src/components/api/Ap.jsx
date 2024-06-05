import axios from 'axios';

const API_URL = 'http://localhost:5000/linchart';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    const apiData = response.data;

    // Transform the data to match the structure required by ResponsiveLine
    const transformedData = apiData.map(item => ({
      id: item.id,
      color: item.color,
      data: item.data.map(dataPoint => ({
        x: dataPoint.date,
        y: dataPoint.value
      }))
    }));

    return transformedData;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};

export default fetchData;
