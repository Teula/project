import React from "react";
import Link from "next/link";
import styles from "../../styles/College.module.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CollegeCard from "../../components/CollegeCard";
import axios from "axios";

export async function getStaticProps() {
  // const response = await fetch("http://localhost:3000/api/college");
  // const data = await response.json();
  const res = await axios.get("http://localhost:3000/api/college");

  return {
    props: {
      //   colleges: data.colleges.map((college) => {
      //     return { name: college.name, id: college._id };
      //   }),
      colleges: res.data,
    },
  };
}

export default function Index(props) {
  const { colleges } = props;
  console.log(colleges);
  const college = colleges.colleges.map((c) => (
    <div>
      <CollegeCard key={c._id} c={c} />
    </div>
  ));

  return (
    <div>
      {/* all colleges */}
      {/* <div className={styles.collegesGrid}>
        <div className={styles.collegesImg}> */}
      {/* <img
            className={styles.collegesImgSize}
            src='https://plus.unsplash.com/premium_photo-1661293844765-f3f21ae9dc81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img> */}
      {/* </div>
        <div className={styles.collegesTitle}>College of Engineering</div>
        <div className={styles.collegesMajors}>
          <div className={styles.majorsTitle}></div>
          <div className={styles.majorsList}></div>
        </div> */}
      {/* </div> */}
      <div className={styles.collegesGrid}>{college}</div>
    </div>
  );
}
