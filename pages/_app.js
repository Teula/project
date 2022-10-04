import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// pages/_app.js
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <UserProvider>
        <Component {...pageProps} />
        <Head>
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
        </Head>
      </UserProvider>
    </div>
  );
}

export default MyApp;
