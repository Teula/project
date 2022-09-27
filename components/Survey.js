import React, { useState } from "react";
import styles from "../styles/Survey.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Survey() {
  const [grade, setGrade] = useState();
  const handleGrade = (event) => {};

  return (
    <div className={styles.Survey}>
      <h1>survey</h1>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={grade}
          label='Age'
          onChange={handleGrade}>
          <MenuItem value={10}>A+</MenuItem>
          <MenuItem value={20}>A</MenuItem>
          <MenuItem value={30}>B+</MenuItem>
          <MenuItem value={30}>B</MenuItem>
          <MenuItem value={30}>C+</MenuItem>
          <MenuItem value={30}>C</MenuItem>
          <MenuItem value={30}>D+</MenuItem>
          <MenuItem value={30}>D</MenuItem>
          <MenuItem value={30}>F</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Instructor</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={grade}
          label='Age'
          onChange={handleGrade}>
          <MenuItem value={10}>A+</MenuItem>
          <MenuItem value={20}>A</MenuItem>
          <MenuItem value={30}>B+</MenuItem>
          <MenuItem value={30}>B</MenuItem>
          <MenuItem value={30}>C+</MenuItem>
          <MenuItem value={30}>C</MenuItem>
          <MenuItem value={30}>D+</MenuItem>
          <MenuItem value={30}>D</MenuItem>
          <MenuItem value={30}>F</MenuItem>
        </Select>
      </FormControl>
      <h1>taken date and written date</h1>
      <h2>instructor select</h2>
      <h2>course select</h2>
      <h2>grade select</h2>
      <h3>how difficult was the materials</h3>
      <h5>tests</h5>
      <h5>quizes</h5>
      <h5>assigments-project</h5>
      <h3>how difficult was the instructor</h3>
      <h5>شرح</h5>
      <h5>grades assigments fairly</h5>
      <h5>grades tests fairly</h5>
      <h5>grades quizes fairly</h5>
      <h5>takes attandence // serasly</h5>
    </div>
  );
}
