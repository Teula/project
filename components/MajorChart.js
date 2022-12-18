import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

ChartJS.register(ArcElement, Tooltip, Legend);

export function AgainChart(props) {
  const [filter, setFilter] = React.useState("");
  let yes = 0;
  let no = 0;
  console.log("pie", props.data);

  for (let index = 0; index < props.data.length; index++) {
    if (filter == "all") {
      if (props.data[index].again == "No") {
        no++;
      } else {
        yes++;
      }
    } else {
      if (props.data[index].instructor == filter) {
        if (props.data[index].again == "No") {
          no++;
        } else {
          yes++;
        }
      }
    }
  }
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "# of Votes",
        data: [yes, no],
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
  return (
    <div>
      <Pie data={data} />
    </div>
  );
}
