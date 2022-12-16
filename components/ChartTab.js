import React from "react";
import styles from "../styles/TabChart.module.css";
import MyPieChart from "./charts/MyPieChart";
import { Doughnut, registerables } from "react-chartjs-2";
import Chart from "chart.js/auto";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ChartTab(props) {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  console.log("chart", props.data);
  let ap = 0;
  let bp = 0;
  let cp = 0;
  let dp = 0;

  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;

  let f = 0;
  // <MenuItem value={4}>A+</MenuItem>
  //       <MenuItem value={3.7}>A</MenuItem>
  //       <MenuItem value={3.3}>B+</MenuItem>
  //       <MenuItem value={3}>B</MenuItem>
  //       <MenuItem value={2.3}>C+</MenuItem>
  //       <MenuItem value={2}>C</MenuItem>
  //       <MenuItem value={1.3}>D</MenuItem>
  //       <MenuItem value={1}>D</MenuItem>
  //       <MenuItem value={0}>F</MenuItem>
  // for (let index = 0; index < props.data.length; index++) {
  //   const element = array[index];
  // }
  for (let index = 0; index < props.data.length; index++) {
    // console.log("wow", props.data[8].instructor[0]);
    if (filter == "all") {
      switch (props.data[index].grade) {
        case 4:
          ap++;
          break;
        case 3.7:
          a++;
          break;
        case 3.3:
          bp++;
          break;
        case 3:
          b++;
          break;
        case 2.3:
          cp++;
          break;
        case 2:
          c++;
          break;
        case 1.3:
          dp++;
          break;
        case 1:
          d++;
          break;
        case 4:
          f++;
          break;

        default:
          break;
      }
    } else {
      if (props.data[index].instructor == filter) {
        switch (props.data[index].grade) {
          case 4:
            ap++;
            break;
          case 3.7:
            a++;
            break;
          case 3.3:
            bp++;
            break;
          case 3:
            b++;
            break;
          case 2.3:
            cp++;
            break;
          case 2:
            c++;
            break;
          case 1.3:
            dp++;
            break;
          case 1:
            d++;
            break;
          case 4:
            f++;
            break;

          default:
            break;
        }
      }
    }

    // if (props.data[index].grade == 3) {
    //   b++;
    // }
    // if (props.data[index].grade == 3) {
    //   b++;
    // }
  }
  console.log(a);
  const data = {
    labels: ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"],
    datasets: [
      {
        label: "Course Grade",
        data: [ap, a, bp, b, cp, c, dp, d, f],
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
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Instructor</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            defaultValue='all'
            value={filter}
            label='Filter'
            onChange={handleChange}>
            <MenuItem value='all'>All</MenuItem>
            {props.instructors.map((i) => {
              return (
                <MenuItem key={i._id} value={i._id}>
                  {i.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Doughnut data={data} />
    </div>
  );
}
