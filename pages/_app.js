import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// pages/_app.js
import React from "react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div>
      <div className={styles.ff}>
        <SessionProvider session={session}>
          {/* <Head>
          <>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
            />
            <link
              rel='preconnect'
              href='https://fonts.gstatic.com'
              crossOrigin=''
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Slab&display=swap'
              rel='stylesheet'
            />
          </>
        </Head> */}

          <NavBar />
          <Component {...pageProps} />
        </SessionProvider>
      </div>
      {/*  */}
    </div>
  );
}

export default MyApp;
