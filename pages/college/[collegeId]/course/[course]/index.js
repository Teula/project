import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../../../../styles/College.module.css";
import MyPieChart from "../../../../../components/charts/MyPieChart.js";
import ChartTab from "../../../../../components/ChartTab";
import Comment from "../../../../../components/Comment";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FitnessCenterOutlined } from "@material-ui/icons";
import Infooo from "../../../../../components/Infooo";
import NavBar from "../../../../../components/NavBar";

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
    `http://localhost:3000/api/${context.params.course}/comment`
  );
  //
  const data = await response.json();
  // const alldata = JSON.stringify(data);
  const alldata = JSON.parse(JSON.stringify(data.comments));
  // console.log(alldata);
  return {
    props: {
      alldata,
      // comments: alldata.map((c) => {
      //   // console.log(comment);
      //   return { text: c.comment, id: c._id };
      // }),
    },
  };
}

export default function id(props) {
  // change tabs
  const { alldata } = props;
  const comments = alldata.map((c) => {
    return <Comment text={c.text} />;

    // console.log(c);
  });
  // console.log(alldata.comment);
  const [tab, setTab] = useState();
  const handleTab = (event) => {
    switch (event.target.value) {
      case "0":
        setTab(<ChartTab />);

        break;
      case "1":
        setTab(<h1>tab2</h1>);
        break;
      case "2":
        setTab(<h1>tab3</h1>);
        break;
      case "3":
        setTab(<h1>tab4</h1>);
        break;
    }
  };

  const { data: session, status } = useSession();
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

  return (
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
        <Infooo />
        <section>
          <div className={styles.ChartGrid}>
            <button className={styles.ChartBtn} onClick={handleTab} value={0}>
              Graph-1
            </button>
            <button className={styles.ChartBtn} onClick={handleTab} value={1}>
              Graph-2
            </button>
            <button className={styles.ChartBtn} onClick={handleTab} value={2}>
              Graph-3
            </button>
            <button className={styles.ChartBtn} onClick={handleTab} value={3}>
              Graph-4
            </button>
            <div className={styles.TabBox}>{tab}</div>
          </div>
        </section>
        {comments}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
