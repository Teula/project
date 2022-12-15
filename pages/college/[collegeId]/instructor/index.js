import React, { useEffect, useState } from "react";
import CourseCard from "../../../../components/CourseCard";
import { Button, Container, Grid } from "@mui/material";
import SearchBar from "../../../../components/SearchBar";
import Filter from "../../../../components/Filter";
import AddCourse from "../../../../components/AddCourse";
import getCourses from "../../../../lib/backend/getCourses";
import DrawerAdmain from "../../../../components/mui/DrawerAdmain";
import { useRouter } from "next/router";
import Fuse from "fuse.js";

export async function getStaticProps(context) {
  console.log("name", context.params.collegeId);
  const collegeId = context.params.collegeId;
  const response = await fetch(
    `http://localhost:3000/api/college/${collegeId}/courses`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      courses: data.courses.map((course) => {
        return {
          name: course.name,
          id: course._id,
          code: course.code,
          prerequisites: course.prerequisites,
          majors: course.majors,
        };
      }),
      majors: data.majors.map((major) => {
        return {
          id: major._id,
          name: major.name,
        };
      }),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { collegeId: "course" } }],
    fallback: "blocking", //indicates the type of fallback
  };
}

export default function index(props) {
  const router = useRouter();

  const handleInstructorSubmit = async () => {
    console.log("post", instructor);
    const data = await fetch(
      `http://localhost:3000/api/instructor/${router.query.collegeId}`,
      {
        method: "POST",
        body: JSON.stringify({ instructor }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };
  const handleDelete = async (_id) => {
    // fix path --------------------------------------------------------
    console.log("post", _id);
    const data = await fetch(
      `http://localhost:3000/api/college/${router.query.collegeId}/courses/${router.query.course}`,
      {
        method: "DELETE",
        body: JSON.stringify({ _id }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  const [filtered, setFiltered] = useState();
  const { courses, majors } = props;
  console.log(majors);
  const getFilter = (courses) => {
    setFiltered(courses);
  };

  const getSearch = (term) => {
    let filterdCourses;
    if (!term) {
      filterdCourses = courses;
      setSearch(filterdCourses);
    } else {
      console.log(term);
      filterdCourses = courses.find((c) => c.name === term);
      console.log(filterdCourses);
    }
  };
  // const filterdCourses = courses.map();
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ["major", "name"],
  };
  const [search, setSearch] = useState("");
  const fuse = new Fuse(courses, options);
  const searchResult = fuse.search(search).map((result) => result.item);

  console.log("result", searchResult);
  console.log("result", courses);
  let renderC = courses;
  if (searchResult.length) {
    renderC = searchResult;
  }

  const course = renderC.map((c) => (
    <Grid item xs={4}>
      <CourseCard handleDelete={handleDelete} course={c} key={c.id} />
    </Grid>
  ));
  const [instructor, setInstructor] = useState();

  // const [body, setBody] = useState(() => {
  //   let course = courses.map((c) => (
  //     <Grid item xs={4}>
  //       <CourseCard handleDelete={handleDelete} course={c} key={c.id} />
  //     </Grid>
  //   ));
  //   return [{ course }];
  // });
  // const test1 = () => {
  //   setBody(() => {
  //     let course = courses.map((c) => (
  //       <Grid item xs={4}>
  //         <CourseCard handleDelete={handleDelete} course={c} key={c.id} />
  //       </Grid>
  //     ));
  //     return [{ course }];
  //   });
  // };
  // useEffect(() => {
  //   console.log("useeff", searchResult);
  //   test1();
  // }, [searchResult]);

  // console.log(courses);
  // const filterdCourses = courses.map((f) => {});

  return (
    // fix container

    <div>
      {/* <ol>
        {searchResult.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ol> */}
      <input
        type='text'
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>All Course</h1>
          </Grid>
          <Grid item xs={8}>
            <Filter get={getFilter} courses={courses} />
          </Grid>
          <Grid item xs={12}>
            <SearchBar get={getSearch} />
          </Grid>
          {course}
          {/* {body} */}
        </Grid>
      </Container>
      {/* <Container maxWidth='sm'>
        <h1>Admin Control</h1>
        <AddCourse courses={courses} />
      </Container> */}
      {/* <DrawerAdmain
        majors={majors}
        courses={courses}
        handleSubmit={handleSubmit}
      /> */}
      <input
        type='text'
        onChange={(event) => {
          setInstructor(event.target.value);
        }}
      />
      <button onClick={handleInstructorSubmit}>Add instructor</button>
      {/* <ul>
        <h1>idaes</h1>
        <li>core tag</li>
        <li>move search bar and improve</li>
        <li>Scdule</li>
        <li>survy info</li>
        <li>better filter ui</li>
        
      </ul> */}
    </div>
  );
}
