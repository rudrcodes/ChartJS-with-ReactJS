import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
export const BarChart = ({ data }) => {
  useEffect(() => {
    // data.map((el) => {
    // console.log(el);
    // });
  }, [data]);
  const labels = ["Easy", "Medium", "Hard"];
  const ChartData = {
    labels,
    datasets: [
      {
        label: "Chart value",
        backgroundColor: ["#f32f2f", "#874bc0", "#17f55a"],
        borderColor: "#8d8989",
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
          // backgroundColor: "#ffffff11",
        }}
      >
        <Bar data={ChartData} />
      </div>
    </div>
  );
};
