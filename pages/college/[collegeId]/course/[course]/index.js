import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../../../../styles/College.module.css";
import MyPieChart from "../../../../../components/charts/MyPieChart.js";
import ChartTab from "../../../../../components/ChartTab";
import Comment from "../../../../../components/Comment";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FitnessCenterOutlined } from "@material-ui/icons";
import NavBar from "../../../../../components/NavBar";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fuse from "fuse.js";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AgainChart } from "../../../../../components/AgainChart";
// import Infooo from "../../../../../components/Infooo";

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
  // console.log(context.params.course);
  const response = await fetch(
    `http://localhost:3000/api/course/${context.params.course}/comment`
  );
  const res = await axios.get(
    `http://localhost:3000/api/course/${context.params.course}/comment`
  );
  // console.log("res", res.data.comments[0].user[0].email);
  //
  const response1 = await fetch(
    `http://localhost:3000/api/college/${context.params.collegeId}/instructors`
  );
  const instructors = await response1.json();
  const data = await response.json();
  // const alldata = JSON.stringify(data);
  const alldata = JSON.parse(JSON.stringify(data.comments));

  // console.log(alldata);
  return {
    props: {
      alldata,
      test1: res.data.comments,
      instructors,
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
  console.log("this", props.instructors.instructors);
  const notify = () =>
    toast.warn(
      <h1>
        <Link href='/login'>Log in</Link> to rate
      </h1>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
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
  const { alldata, test1 } = props;
  const router = useRouter();
  // console.log("res11", test1[0].user);

  const [like, setLike] = useState();
  const [dislike, setDislike] = useState();
  const [commentId, setCommentId] = useState();
  // console.log(alldata.comments, "alldata");
  useEffect(() => {
    if (isMounted.current) {
      handleRating();
      console.log("yesss");
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
        setTab(<AgainChart />);
        break;
      case "2":
        setTab(<h1>tab3</h1>);
        break;
      case "3":
        setTab(<h1>tab4</h1>);
        break;
    }
  };

  let uemal;
  if (session) {
    uemal = <p>Signed in as {session.user.name}</p>;
    console.log(session);
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
  return (
    <div>
      {(status == "authenticated" || status == "unauthenticated") && (
        <div>
          {/* <NavBar /> */}
          <section className={styles.Header}>
            <div className={styles.HeaderGrid}>
              <div className={styles.HeaderText}>
                <h1 className={styles.HeaderTitle}>Course Name</h1>
                <p>Course Number</p>
              </div>
              <div className={styles.HeaderImage}>
                <img className={styles.MainImage} src='' alt='' />
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
            {/* <Infooo /> */}

            {session && (
              <div className={styles.rateMe}>
                <Link
                  href={`/college/${router.query.collegeId}/course/${router.query.course}/survey`}>
                  Rate Me 1
                </Link>
              </div>
            )}
            {!session && (
              <div className={styles.rateMe} onClick={notify}>
                <a href='#'>Rate Me 2</a>
              </div>
            )}

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
                  Graph-1
                </button>
                <button
                  className={styles.ChartBtn}
                  onClick={handleTab}
                  value={1}>
                  Graph-2
                </button>
                <button
                  className={styles.ChartBtn}
                  onClick={handleTab}
                  value={2}>
                  Graph-3
                </button>
                <button
                  className={styles.ChartBtn}
                  onClick={handleTab}
                  value={3}>
                  Graph-4
                </button>
                <div className={styles.TabBox}>{tab}</div>
              </div>
            </section>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
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
