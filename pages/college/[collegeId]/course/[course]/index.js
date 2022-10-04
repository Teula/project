import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../../../../styles/College.module.css";
import MyPieChart from "../../../../../components/charts/MyPieChart.js";
import ChartTab from "../../../../../components/ChartTab";
import Comment from "../../../../../components/Comment";

// export async function getStaticProps(context) {
//   // const {params} = context
//   // const response = await fetch("http://localhost:3000/api/courses");
//   // const courses = await response.json();
//   return {};
// }

export default function id() {
  // change tabs
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
  const router = useRouter();
  return (
    <>
      <section className={styles.Header}>
        <div className={styles.HeaderGrid}>
          <div className={styles.HeaderText}>
            <h1 className={styles.HeaderTitle}>Course Name</h1>
            <a href='#'>share your experince btn</a>
          </div>
          <div className={styles.HeaderImage}>
            <img className={styles.MainImage} src='' alt='' />
          </div>
        </div>
      </section>
      <section className={styles.Info}>
        <div className={styles.InfoGrid}>
          <div className={styles.InfoBox}>
            <div className={styles.InfoIcon}>
              <span className='material-symbols-outlined'>lock</span>
            </div>
            <p className={styles.InfoTitle}>Prerequisites</p>
            <ul className={styles.InfoList}>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
              <li>course1</li>
              <li>course1</li>
            </ul>
          </div>

          <div className={styles.InfoBox}>
            <div>
              <p>Icon</p>
              <p>name</p>
              <ul>
                <li>course1</li>
                <li>course1</li>
                <li>course1</li>
              </ul>
            </div>
          </div>
          <div className={styles.InfoBox}>
            <div>
              <p>Icon</p>
              <p>name</p>
              <ul>
                <li>course1</li>
                <li>course1</li>
                <li>course1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.ChartGrid}>
          <button className={styles.ChartBtn} onClick={handleTab} value={0}>
            graph-1
          </button>
          <button onClick={handleTab} value={1}>
            graph-2
          </button>
          <button onClick={handleTab} value={2}>
            graph-3
          </button>

          <button onClick={handleTab} value={3}>
            graph-4
          </button>
          <div className={styles.TabBox}>{tab}</div>
        </div>
        <Comment />
      </section>
    </>
  );
}
