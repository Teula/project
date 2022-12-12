import React from "react";
import { useSession } from "next-auth/react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function profile() {
  const { data: session, status } = useSession();
  const handleUpdate = async () => {
    const data = await fetch(
      `http://localhost:3000/api/profile`,

      {
        method: "PUT",
        body: JSON.stringify({ major, year, session }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };
  //
  const [year, setYear] = React.useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const [major, setMajor] = React.useState("");

  const handleMajor = (event) => {
    setMajor(event.target.value);
  };
  //

  if (session) {
    return (
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Year</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={year}
              label='Year'
              onChange={handleChange}>
              <MenuItem value='Freshman'>Freshman</MenuItem>
              <MenuItem value='Sophomore'>Sophomore</MenuItem>
              <MenuItem value='Junior'>Junior</MenuItem>
              <MenuItem value='Senior'>Senior</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Major</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={major}
              label='Major'
              onChange={handleMajor}>
              <MenuItem value='SE'>SE</MenuItem>
              <MenuItem value='CS'>CS</MenuItem>
              <MenuItem value='IT'>IT</MenuItem>
              <MenuItem value='CE'>CE</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete='off'>
          <TextField id='outlined-basic' label='Outlined' variant='outlined' />
          <TextField id='filled-basic' label='Filled' variant='filled' />
          <TextField id='standard-basic' label='Standard' variant='standard' />
        </Box>

        <button onClick={handleUpdate}>update</button>
      </div>
    );
  }
  return <></>;
}
