import {
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

export default function Filter(props) {
  let age;
  const handleChange = (event) => {
    props.get(event.target.value);
  };
  const majors = props.courses.map((c) => (
    <MenuItem key={c.majors.tag} value={c.majors.tag}>
      {c.majors.tag}
    </MenuItem>
  ));
  const handleFilter = () => {};

  return (
    <Container maxWidth='md'>
      <Grid container spacing={2}>
        {/* <Grid item xs={3}>
          Major
        </Grid> */}
        <Grid item xs={9}>
          <FormControlLabel
            onChange={handleFilter}
            control={<Checkbox defaultChecked />}
            label='IT'
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label='CE' />
          <FormControlLabel control={<Checkbox defaultChecked />} label='CS' />
          <FormControlLabel control={<Checkbox defaultChecked />} label='SE' />
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>filter</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Major'
              onChange={handleChange}>
              {majors}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
