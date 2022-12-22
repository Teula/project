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
import styles from "../../../../styles/College.module.css";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Router from "next/router";

import { useSession } from "next-auth/react";
import InstructorCard from "../../../../components/InstructorCard";

export async function getStaticProps(context) {
  console.log("name", context.params.collegeId);
  const collegeId = context.params.collegeId;
  const response = await fetch(
    `http://localhost:3000/api/college/${collegeId}/instructors`
  );
  const data = await response.json();
  console.log("67", data);
  return {
    props: {
      courses: data.instructors.map((i) => {
        return {
          name: i.name,
          id: i._id,
          comments: i.comments,
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

export default function Index(props) {
  const router = useRouter();

  const handleSubmit = async (newCourse) => {
    console.log("post", newCourse);
    const data = await fetch(
      `http://localhost:3000/api/college/${router.query.collegeId}/courses`,
      {
        method: "POST",
        body: JSON.stringify({ newCourse }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    router.reload();
  };
  const handleDelete = async (_id) => {
    console.log("post", _id);
    const data = await fetch(
      `http://localhost:3000/api/college/${router.query.collegeId}/instructors/${router.query.instructor}`,
      {
        method: "DELETE",
        body: JSON.stringify({ _id }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    router.reload();
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
    keys: ["name"],
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
  const [instructor, setInstructor] = useState();
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
    router.reload();
  };

  const course = renderC.map((c) => (
    <Grid item xs={4} key={c.id}>
      <InstructorCard handleDelete={handleDelete} course={c} key={c.id} />
    </Grid>
  ));
  const { data: session, status } = useSession();
  // console.log("id", renderC[0].id);

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
  let admin = "";
  let loadpage = false;
  if (status == "authenticated" || status == "unauthenticated") {
    loadpage = true;
    if (session) {
      if (session.user.isAdmin) {
        admin = (
          <div>
            <input
              type='text'
              onChange={(event) => {
                setInstructor(event.target.value);
              }}
            />
            <button onClick={handleInstructorSubmit}>Add instructor</button>
          </div>
        );
      }
    }
  }

  return (
    // fix container

    <div>
      {loadpage && (
        <div>
          <Container maxWidth='lg' sx={{ marginTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ fontSize: 16 }}>
                <h1>All Instructors</h1>
              </Grid>
              {/* <Grid item xs={8}>
            <Filter get={getFilter} courses={courses} />
          </Grid> */}
              <Grid item xs={12}>
                <TextField
                  id='standard-basic'
                  label='Search For...'
                  variant='standard'
                  size='large'
                  sx={{ width: "100%" }}
                  type='text'
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </Grid>
              {course}
              {/* {body} */}
            </Grid>
          </Container>

          {/* <Container maxWidth='sm'>
        <h1>Admin Control</h1>
        <AddCourse courses={courses} />
      </Container> */}
          {admin}

          {/* <ul>
        <h1>idaes</h1>
        <li>core tag</li>
        <li>move search bar and improve</li>
        <li>Scdule</li>
        <li>survy info</li>
        <li>better filter ui</li>
        
      </ul> */}
        </div>
      )}
      {/* <ol>
        {searchResult.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ol> */}
      {/* <input
        type='text'
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      /> */}
    </div>
  );
}
