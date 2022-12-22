import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../../../../styles/College.module.css";
import MyPieChart from "../../../../../components/charts/MyPieChart.js";
import ChartTab from "../../../../../components/ChartTab";
import Comment from "../../../../../components/Comment";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FitnessCenterOutlined, Replay10 } from "@material-ui/icons";
import NavBar from "../../../../../components/NavBar";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fuse from "fuse.js";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AgainChart } from "../../../../../components/AgainChart";
import Infooo from "../../../../../components/Infooo";

// export async function getStaticProps(context) {
//   // const {params} = context
//   // const response = await fetch("http://localhost:3000/api/courses");
//   // const courses = await response.json();
//   return {};
// }
// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await fetch("http://localhost:3000/api/courses");
//   const courses = await response.json();
//   return {};
// }

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/instruc/${context.params.instructor}`
  );

  /////////////////////////////////////////////////////
  // console.log(context.params.course);
  // const response = await fetch(
  //   `http://localhost:3000/api/instructor/${context.params.instructor}/comment`
  // );

  // const res = await axios.get(
  //   `http://localhost:3000/api/instructor/${context.params.instructor}/comment`
  // );
  // // console.log("res", res.data.comments[0].user[0].email);
  // //
  // const response1 = await fetch(
  //   `http://localhost:3000/api/college/${context.params.collegeId}/instructors` // get courses insetd
  // );
  // const res1 = await axios.get(
  //   `http://localhost:3000/api/college/${context.params.collegeId}/instructors/${context.params.instructor}` // fix
  // );

  // const instructors = await response1.json();
  const data = await response.json();
  // const alldata = JSON.stringify(data);
  const alldata = JSON.parse(JSON.stringify(data.comments));
  console.log("alldata", alldata);
  /////////////////////////////////////////////////////////////
  // console.log(alldata);
  return {
    props: {
      alldata,
      test1: res.data.comments,
      instructors,
      courseInfo: res1.data,
      // user: res.data.comments.map((u) => {
      //   return {
      //     id: u.user._id,
      //   };
      // }),
      // comment: res.data.map((u) => {
      //   console.log("u", u._id);
      // }),
      // comments: alldata.map((c) => {
      //   // console.log(comment);
      //   return { text: c.comment, id: c._id };
      // }),
    },
  };
  // return {
  //   props: {
  //     user: data.user.map((u) => {
  //       return {
  //         u,
  //       };
  //     }),
  //     comment: data.comment.map((c) => {
  //       return {
  //         c,
  //       };
  //     }),
  //   },
  // };
}

export default function Id(props) {
  const editComment = async (id, newComment) => {
    axios.put(`http://localhost:3000/api/comment/${id}`, { newComment });
    router.reload(window.location.pathname);
  };
  const deleteComment = async (id) => {
    axios.delete(`http://localhost:3000/api/comment/${id}`);
    router.reload(window.location.pathname);
  };
  // console.log("this", props.instructors.instructors);
  const notify = () =>
    toast.warn(<Link href='/login'>Log in to rate</Link>, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const { data: session, status } = useSession();
  const isMounted = useRef(false);
  const handleRating = async () => {
    const Uid = session.user._id;
    const data = await fetch(`http://localhost:3000/api/comment/${commentId}`, {
      method: "POST",
      body: JSON.stringify({ like, dislike, Uid }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  // useEffect(() => {
  //   const comments = alldata.map((c) => {
  //     return (
  //       <Comment
  //         key={c._id}
  //         text={c.text}
  //         id={c._id}
  //         likes={c.likes}
  //         dislikes={c.dislikes}
  //         getlike={getlike}
  //         getdislike={getdislike}
  //         currentUser={session.user._id || null}
  //       />
  //     );

  //     // console.log(c);
  //   });
  // }, [status == "authenticated"]);

  // change tabs
  const { alldata, test1, courseInfo } = props;
  const router = useRouter();
  // console.log("res11", test1[0].user);

  const [like, setLike] = useState();
  const [dislike, setDislike] = useState();
  const [commentId, setCommentId] = useState();
  // console.log(alldata.comments, "alldata");
  useEffect(() => {
    if (isMounted.current) {
      handleRating();
      // console.log("yesss");
    } else {
      isMounted.current = true;
    }
  }, [like, dislike]);
  // useEffect(() => {}, [dislike]);
  const getlike = (id) => {
    setLike(1);
    setDislike(0);
    setCommentId(id);
  };
  const getdislike = (id) => {
    setLike(0);
    setDislike(1);
    setCommentId(id);
  };

  // const [comments, setComments] = useState(() => {

  // });

  // console.log(c);

  // console.log(alldata.comment);
  const [tab, setTab] = useState();
  const handleTab = (event) => {
    switch (event.target.value) {
      case "0":
        setTab(
          <ChartTab
            data={alldata}
            instructors={props.instructors.instructors}
          />
        );

        break;
      case "1":
        setTab(
          <AgainChart
            data={alldata}
            instructors={props.instructors.instructors}
          />
        );
        break;
      case "2":
        setTab(
          <AgainChart
            data={alldata}
            instructors={props.instructors.instructors}
          />
        );
        break;
      case "3":
        setTab(
          <AgainChart
            data={alldata}
            instructors={props.instructors.instructors}
          />
        );
        break;
    }
  };

  let uemal;
  if (session) {
    uemal = <p>Signed in as {session.user.name}</p>;
    // console.log(session);
  }
  const [isShown, setIsShown] = useState(false);
  const test = () => {
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  };

  // const comments = alldata.map((c) => {
  //   return (
  //     <Comment
  //       key={c._id}
  //       text={c.text}
  //       id={c._id}
  //       likes={c.likes}
  //       dislikes={c.dislikes}
  //       getlike={getlike}
  //       getdislike={getdislike}
  //       currentUser={session.user._id || null}
  //     />
  //   );
  // });

  // const options = {
  //   includeScore: true,
  //   // Search in `author` and in `tags` array
  //   keys: ["major", "name"],
  // };
  //   const [search, setSearch] = useState("");
  // const fuse = new Fuse(alldata, options);
  // const searchResult = fuse.search(search).map((result) => result.item);
  // console.log(
  //   "sort",
  const [filter, setFilter] = React.useState("");
  const handleFilter = (e) => {
    setFilter(e.target.value);
    if (e.target.value == "popular") {
      alldata.sort((a, b) => {
        return b.likes.length - a.likes.length;
      });
    }
    if (e.target.value == "new") {
      alldata.sort((a, b) => {
        let da = new Date(a.createdAt),
          db = new Date(b.createdAt);
        console.log(db.getTime());
        return db.getTime() - da.getTime();
      });
    }
  };

  console.log("aalld", alldata);
  let instructorCount;

  instructorCount = courseInfo.course.instructors.map((n) => {
    return {
      name: n.name,
    };
  });

  // const count = {};
  // instructorCount.forEach((element) => {
  //   count[element] = (count[element] || 0) + 1;
  // });

  // 👇️ {one: 3, two: 2, three: 1}

  // let counter = {};
  // instructorCount.forEach(function (name) {
  //   var key = JSON.stringify(name);
  //   counter[key] = (counter[key] || 0) + 1;
  // });
  const convert = (instructorCount) => {
    const res = {};
    instructorCount.forEach((obj) => {
      const key = `${obj.name}`;
      if (!res[key]) {
        res[key] = { ...obj, count: 0 };
      }
      res[key].count += 1;
    });
    return Object.values(res);
  };
  console.log(convert(instructorCount));

  let sortable = [];
  for (var instructor in convert(instructorCount)) {
    sortable.push([instructor, convert(instructorCount)[instructor]]);
  }

  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  console.log("sorted?", sortable);
  // console.log("count1", counter);
  // console.log("count", counter == courseInfo.course.instructors[0]);
  let loadpage = false;
  if (status == "authenticated" || status == "unauthenticated") {
    loadpage = true;
  }
  return (
    <div>
      {loadpage && (
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
            className={styles.coursesBackGround}>
            <path
              fill='#7e5dc0'
              fill-opacity='1'
              d='M0,288L34.3,261.3C68.6,235,137,181,206,154.7C274.3,128,343,128,411,133.3C480,139,549,149,617,181.3C685.7,213,754,267,823,240C891.4,213,960,107,1029,64C1097.1,21,1166,43,1234,80C1302.9,117,1371,171,1406,197.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'></path>
          </svg>
          <section className={styles.Header}>
            <div className={styles.HeaderGrid}>
              <div className={styles.HeaderText}>
                <p className={styles.codeHeader}>#{courseInfo.course.code}</p>
                <h1 className={styles.HeaderTitle}>{courseInfo.course.name}</h1>
              </div>
            </div>
          </section>
          <div className={styles.body}>
            {/* <button
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
        onClick={() => test()}>
        Hover over me!
      </button>
      {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )} */}
            <section className={styles.Info}>
              <div className={styles.InfoGrid}>
                <div className={styles.InfoBox}>
                  <div className={styles.InfoIcon}>
                    <LockIcon />
                  </div>

                  <p className={styles.InfoTitle}>Prerequisites</p>
                  <ul className={styles.InfoList}>
                    {!courseInfo.course.prerequisites[0] && <li>None</li>}
                    {courseInfo.course.prerequisites.map((c) => {
                      return (
                        <li key={c.name}>
                          <span key={c.code} className={styles.Code}>
                            #{c.code}
                          </span>
                          {c.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={styles.InfoBox}>
                  <div className={styles.InfoIcon}>
                    <PersonIcon />
                  </div>

                  <p className={styles.InfoTitle}>Instructor</p>

                  <ul className={styles.InfoList}>
                    {convert(instructorCount).map((i) => {
                      return (
                        <li key={i.name}>
                          {i.name} ({i.count})
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* <div className={styles.InfoBox}>
            <div className={styles.InfoIcon}>
              <span className='material-symbols-outlined'>lock</span>
            </div>
            <p className={styles.InfoTitle}>Unlock</p>
            <ul className={styles.InfoList}>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
            </ul>
          </div> */}
                {/* <a href='#' className={styles.rateMee}>
            Rate Me
          </a> */}
                {/* <div className={styles.rateMe}>
            <Link
              href={`/college/${router.collegeId}/course/${router.course}/survey`}>
              Rate Me 1
            </Link>
          </div> */}
              </div>
            </section>

            <ToastContainer
              position='top-center'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />

            <section>
              <div className={styles.ChartGrid}>
                <button
                  className={styles.ChartBtn}
                  onClick={handleTab}
                  value={0}>
                  Grade
                </button>
                <button
                  className={styles.ChartBtn}
                  onClick={handleTab}
                  value={1}>
                  Take Again
                </button>
                <button
                  className={styles.ChartBtn}
                  onClick={handleTab}
                  value={2}>
                  Major
                </button>
                <button
                  className={styles.ChartBtn}
                  onClick={handleTab}
                  value={3}>
                  Year
                </button>
                <div className={styles.TabBox}>{tab}</div>
              </div>
            </section>
            <div className={styles.test}>
              {session && (
                <div className={styles.rateMe}>
                  <Link
                    href={`/college/${router.query.collegeId}/course/${router.query.course}/survey`}>
                    Rate Me
                  </Link>
                </div>
              )}
              {!session && (
                <div className={styles.rateMe} onClick={notify}>
                  Rate Me
                </div>
              )}
              <Box>
                <FormControl sx={{ width: 250 }}>
                  <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={filter}
                    defaultValue=''
                    label='Sort'
                    onChange={handleFilter}>
                    <MenuItem value='popular'>Popular</MenuItem>
                    <MenuItem value='new'>New</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            {alldata.map((c) => {
              return (
                <Comment
                  key={c._id}
                  text={c.text}
                  id={c._id}
                  likes={c.likes}
                  dislikes={c.dislikes}
                  getlike={getlike}
                  user={c.user}
                  created={c.createdAt}
                  updated={c.updatedAt}
                  getdislike={getdislike}
                  grade={c.grade}
                  again={c.again}
                  hide={c.hide}
                  editComment={editComment}
                  deleteComment={deleteComment}
                  currentUser={session ? session.user._id : null}
                />
              );
            })}
          </div>
          <div className={styles.footer}></div>
        </div>
      )}
    </div>
  );
}
