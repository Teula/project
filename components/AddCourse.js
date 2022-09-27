import MultiSelect from "./mui/MultiSelect";
import { TextField, Grid, Button } from "@mui/material";
import { useState } from "react";

export default function AddCourse(props) {
  const { courses, majors } = props;
  const [name, setName] = useState();
  const [code, setCode] = useState();
  const [pre, setPre] = useState();
  const [majorsName, setMajorsName] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleCode = (event) => {
    setCode(event.target.value);
  };
  const handlePre = (pre) => {
    setPre(pre);
  };
  const handleMajors = (major) => {
    setMajorsName(major);
  };
  const handleSubmit = () => {
    const newCourse = {
      name,
      code,
      pre,
      majors: majorsName,
    };
    console.log("handleSub", newCourse);
    props.handleSubmit(newCourse);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            onChange={handleName}
            id='standard-basic'
            label='Name'
            variant='standard'
          />
        </Grid>
        <Grid item xs={4}>
          <MultiSelect
            get={handlePre}
            options={courses}
            label='Prerequisites'
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            onChange={handleCode}
            id='standard-basic'
            label='Code'
            variant='standard'
          />
        </Grid>
        <Grid item xs={4}>
          <MultiSelect get={handleMajors} options={majors} label='Major' />
        </Grid>
      </Grid>
      <Button variant='contained' onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
}
