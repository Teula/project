import Document, { Html, NextScript } from "next/document";
import Head from "next/head";

class MyDocument extends Document {
  render() {
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Slab&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>;
  }
}
