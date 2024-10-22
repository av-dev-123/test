import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ timeRange }) => {
  const data = {
    12: [120, 150, 180, 210, 170, 160, 190, 200, 180, 220, 230, 240],
    6: [170, 160, 190, 200, 180, 220],
    1: [220],
  };

  const labels = {
    12: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    6: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    1: ["Dec"],
  };

  const chartData = {
    labels: labels[timeRange],
    datasets: [
      {
        label: `Data for ${timeRange} month(s)`,
        data: data[timeRange],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <div style={{ width: "100%",height:450, margin: "auto" }}>
        <Bar data={chartData}  options={chartOptions}/>
      </div>
    </div>
  );
};

export default Chart;
