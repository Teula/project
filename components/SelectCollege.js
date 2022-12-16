import React, { useState } from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";

export default function SelectCollege(props) {
  const [collegeId, setCollegeId] = useState();

  const handleChange = (event) => {
    setCollegeId(event.target.value);
    console.log("collegeId nested", event.target.value);
    props.getCollegeId(event.target.value);
  };
  // const {name, id} = props.colleges
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>College</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        // value={collegeId}
        label='College'
        onChange={handleChange}>
        {props.colleges.map((c) => (
          <MenuItem key={c.id} value={c.id}>
            {c.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
