import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginBtn from "../components/LoginBtn";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Link from "next/link";

import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section
        className={styles.masthead}
        role='img'
        aria-label='Image Description'>
        <h1>The PMU Experience</h1>
        <Link href={"/college"}>
          <button>View PMU Colleges</button>
        </Link>
      </section>
      {/*<svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className={styles.backGround}>
        <path
          fill='#7e5dc0'
          fill-opacity='0.95'
          d='M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,202.7C840,203,960,245,1080,261.3C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'></path>
       </svg>*/}
      <div className={styles.row}>
        <div className={styles.featuresSmallItem}>
          {/* <div className={styles.icon}>
            <i><img src="assets/images/featured-item-01.png" alt=""></i> 
          </div> */}
          <h5 className={styles.featuresTitle}>
            <ConnectWithoutContactIcon
              sx={{ fontSize: 50, color: "#7e5dc0" }}
            />
          </h5>
          <p className={styles.featuresText}>
            Share your opinion here with everybody
          </p>
        </div>
        <div className={styles.featuresSmallItem}>
          {/* <div className={styles.icon}>
            <i><img src="assets/images/featured-item-01.png" alt=""></i>
            </div> */}
          <h5 className={styles.featuresTitle}>
            <TipsAndUpdatesIcon sx={{ fontSize: 50, color: "#7e5dc0" }} />
          </h5>
          <p className={styles.featuresText}>
            Here you can find the information to start your semester
          </p>
        </div>
        <div className={styles.featuresSmallItem}>
          {/* <div className={styles.icon}>
            <i><img src="assets/images/featured-item-01.png" alt=""></i>
            </div> */}
          <h5 className={styles.featuresTitle}>
            <ThumbsUpDownIcon sx={{ fontSize: 50, color: "#7e5dc0" }} />
          </h5>
          <p className={styles.featuresText}>
            You can Like and disLike other opinion
          </p>
        </div>
      </div>

      {/* <svg
        id='sw-js-blob-svg'
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'>
        {" "}
        <defs>
          {" "}
          <linearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'>
            {" "}
            <stop
              id='stop1'
              stop-color='rgba(126, 93, 192, 1)'
              offset='0%'></stop>{" "}
            <stop
              id='stop2'
              stop-color='rgba(126, 93, 192, 1)'
              offset='100%'></stop>{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <path
          fill='url(#sw-gradient)'
          d='M23,-40.1C29.7,-36,34.9,-29.6,39,-22.5C43.1,-15.4,46.1,-7.7,44.4,-1C42.6,5.7,36.1,11.4,31.2,17.1C26.3,22.8,23.1,28.6,18.2,33.5C13.3,38.3,6.6,42.2,-0.3,42.7C-7.3,43.3,-14.5,40.5,-20.8,36.4C-27,32.4,-32.3,27,-34.3,20.7C-36.4,14.5,-35.2,7.2,-35.6,-0.2C-36,-7.7,-38,-15.4,-36.1,-21.9C-34.1,-28.3,-28.2,-33.5,-21.6,-37.6C-14.9,-41.7,-7.4,-44.7,0.4,-45.3C8.2,-46,16.4,-44.2,23,-40.1Z'
          width='100%'
          height='100%'
          transform='translate(50 50)'
          // style='transition: all 0.3s ease 0s;'
          stroke-width='0'
          stroke='url(#sw-gradient)'></path>{" "}
      </svg> */}

      {/* <img src='/Photo.png'></img> */}
      {/* <main className={styles.main}> */}
      {/* <LoginBtn /> */}
      {/* <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
          <a href='faisal@gmail.com'>faisal</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      {/* </main> */}
    </div>
  );
}
