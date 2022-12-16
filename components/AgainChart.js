import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Yes", "No"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: [
        "#51cf66",
        // "#8ce99a",
        // "#339af0",
        // "#4dabf7",
        // "#fcc419",
        // "#ffd43b",
        // "#f06595",
        // "#faa2c1",
        "#ff6b6b",
      ],
      borderColor: [
        "#51cf66",
        // "#8ce99a",
        // "#339af0",
        // "#4dabf7",
        // "#fcc419",
        // "#ffd43b",
        // "#f06595",
        // "#faa2c1",
        "#ff6b6b",
      ],
      borderWidth: 1,
    },
  ],
};

export function AgainChart() {
  return <Pie data={data} />;
}
