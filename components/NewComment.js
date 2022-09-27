import React from "react";
import { TextField } from "@mui/material";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
} from "@mui/material";

export default function NewComment() {
  const options = [
    "A+",
    "A",
    "B+",
    "B",
    "C+",
    "C",
    "D+",
    "D",
    "F",
    "W",
    "WP",
    "WF",
  ];
  return (
    //Grade icons

    <FormGroup>
      <h1>Post:</h1>
      <FormControlLabel control={<Checkbox />} label='Online' />

      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={options}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label='Grade' />}
      />

      <TextField
        id='standard-basic'
        label='Comment'
        variant='standard'
        fullWidth={true}
        multiline={true}
      />
      <br />
      <Button variant='contained'>Send</Button>
    </FormGroup>
  );
}
