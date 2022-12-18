import {
  TextField,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Box,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import AddCourse from "../../../components/AddCourse";
import React, { useState } from "react";
import SelectCollege from "../../../components/SelectCollege";

export async function getStaticProps(context) {
  const response = await fetch("http://localhost:3000/api/college", {
    method: "GET",
  });
  const data = await response.json();

  // console.log(data);
  return {
    props: {
      collegs: data,
    },
  };
}

export default function Create(props) {
  console.log(props.collegs.colleges);
  const colleges = props.collegs.colleges.map((c) => {
    return { name: c.name, id: c._id };
  });
  console.log(colleges);

  const [college, setCollege] = useState();
  const [course, setCourse] = useState();
  const [collegeId, setCollegeId] = useState();
  const getCollegeId = (id) => {
    setCollegeId(id);
  };
  const handleChange = () => {};
  const handleCollege = (event) => {
    setCollege(event.target.value);
  };
  const addCollege = async () => {
    const response = await fetch("http://localhost:3000/api/admin/create", {
      method: "POST",
      body: JSON.stringify({ college }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json;
    console.log("post", data);
  };
  const handleCourse = (event) => {
    setCourse(event.target.value);
    console.log(course);
  };
  const addCourse = async () => {
    console.log(course);
    const response = await fetch(
      "http://localhost:3000/api/admin/create/course",
      {
        method: "POST",
        body: JSON.stringify({ course, collegeId }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json;
    // console.log("post", data);
  };
  let age;
  return (
    <Container maxWidth='sm'>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id='standard-basic'
            label='College'
            variant='standard'
            onChange={handleCollege}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={12}>
          <Button variant='contained' onClick={addCollege}>
            add College
          </Button>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id='standard-basic'
            label='Course'
            variant='standard'
            onChange={handleCourse}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectCollege
            key={colleges.id}
            colleges={colleges}
            getCollegeId={getCollegeId}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' onClick={addCourse}>
            Add Course
          </Button>
        </Grid>{" "}
        <Grid item xs={8}>
          <TextField
            id='standard-basic'
            label='Instructor'
            variant='standard'
          />
        </Grid>
        <Grid item xs={4}>
          <SelectCollege key={colleges.id} colleges={colleges} />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained'>Contained</Button>
        </Grid>
      </Grid>
      <br />
      <AddCourse />
    </Container>
  );
}
