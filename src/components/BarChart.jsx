import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
export const BarChart = ({ data }) => {
  useEffect(() => {
    data.map((el) => {
      console.log(el);
    });
  }, [data]);
  const labels = ["Easy", "Medium", "Hard"];
  const ChartData = {
    labels,
    datasets: [
      {
        label: "Chart value",
        backgroundColor: ["#f3ba2f", "rgba(75,192,192,1)", "#2a71d0"],
        borderColor: "#f7efef",
        borderWidth: 5,
        data: data.map((el) => {
          return el;
        }),
      },
    ],
  };
  return (
    <div>
      <div
        style={{
          width: "90vw",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "#beb9b9",
        }}
      >
        {/* <Bar options={options} data={data} />; */}
        <Bar data={ChartData} />
      </div>
    </div>
  );
};
