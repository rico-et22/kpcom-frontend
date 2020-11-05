// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" href="/favicon.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#0282cd"/>
          <meta property="og:image" content="https://kamilpawlak.com/og-image.jpg" />
          <meta name='description' content="I'm a passionate web developer using React, Next.js, Vue, Nuxt and experimenting with other front-end/JAMStack tech. Visit this site to view my work 😃"/>
          <meta property="og:description" content="I'm a passionate web developer using React, Next.js, Vue, Nuxt and experimenting with other front-end/JAMStack tech. Visit this site to view my work 😃" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;