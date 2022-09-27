import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function SearchBar(props) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
    props.get(event.target.value);
  };
  const [search, setSearch] = useState();
  return (
    <Container maxWidth='md'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            onChange={handleSearch}
            fullWidth
            id='standard-basic'
            label='Course Name'
            variant='standard'
          />
        </Grid>
        {/* <Grid item xs={3}>
          Major
        </Grid>
        <Grid item xs={9}>
          <FormControlLabel control={<Checkbox defaultChecked />} label='IT' />
          <FormControlLabel control={<Checkbox defaultChecked />} label='CE' />
          <FormControlLabel control={<Checkbox defaultChecked />} label='CS' />
          <FormControlLabel control={<Checkbox defaultChecked />} label='SE' />
        </Grid>
        <Grid item xs={8}></Grid> */}
      </Grid>
    </Container>
  );
}
