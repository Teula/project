import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Typography from "@mui/material/Typography";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await fetch("");
//   return {
//     props: {},
//   };
// }

// export function getStaticPaths() {
//   return {
//     paths: [{ params: { collegeId: "620cecf18039a44dbae90f51" } }],
//     fallback: "blocking", //indicates the type of fallback
//   };
// }
export default function Index() {
  const router = useRouter();
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className={styles.backGround}>
        <path
          fill='#7e5dc0'
          fill-opacity='0.95'
          d='M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,202.7C840,203,960,245,1080,261.3C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'></path>
      </svg>
      <div className={styles.test3}>Select</div>
      <div className={styles.row1}>
        <div className={styles.featuresSmallItem1}>
          {/* <div className={styles.icon}>
            <i><img src="assets/images/featured-item-01.png" alt=""></i> 
          </div> */}
          <Link href={`/college/${router.query.collegeId}/instructor`}>
            <img
              className={styles.coursesPageImg}
              src='https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'></img>
          </Link>

          <h5 className={styles.featuresTitle1}>instructors</h5>
        </div>
        <div className={styles.featuresSmallItem1}>
          {/* <div className={styles.icon}>
            <i><img src="assets/images/featured-item-01.png" alt=""></i>
            </div> */}
          <Link href={`/college/${router.query.collegeId}/course`}>
            <img
              className={styles.coursesPageImg}
              src='https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
          </Link>
          <h5 className={styles.featuresTitle1}>Courses</h5>
        </div>
      </div>
      {/* <footer className={styles.footer}>
        <div className={styles.footerContent}>
          Copyright © 2022 Ayman Alsahfy - Faisal Almohaisen
          <div className={styles.footerBrand}>
            <ImportContactsIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#ff589e",
              }}
            />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#ff589e",
                textDecoration: "none",
              }}>
              PMU
            </Typography>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
