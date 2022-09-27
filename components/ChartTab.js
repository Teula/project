import React from "react";
import styles from "../styles/TabChart.module.css";
import MyPieChart from "./charts/MyPieChart";
import { Doughnut, registerables } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function ChartTab() {
  const data = {
    labels: ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"],
    datasets: [
      {
        label: "Course Grade",
        data: [5, 10, 30, 40, 40, 20, 40, 5, 5],
        backgroundColor: [
          "#51cf66",
          "#8ce99a",
          "#339af0",
          "#4dabf7",
          "#fcc419",
          "#ffd43b",
          "#f06595",
          "#faa2c1",
          "#ff6b6b",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className={styles.Chart}>
      <Doughnut data={data} />
    </div>
  );
}
