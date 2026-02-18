import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <title>HK Construction</title>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Meta */}

        <meta name="author" content="Vihaa-infotech" />
        <meta
          name="description"
          content="WE HAVE CONSTRUCTED RANGE OF PROJECTS FROM SMALL TO LARGE TO GIANTS IN THIS 30 YEARS SPAN."
        />
        <meta
          name="keywords"
          content="building architecture, construction, apartment, contractor"
        />
        <meta name="apple-mobile-web-app-title" content="HK Construction" />

        <meta name="application-name" content="HK Construction" />
        <meta name="msapplication-TileColor" content="#cc9966" />
        <meta
          name="msapplication-config"
          content="/images/HomePage/hkc-logo.png"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="/images/HomePage/hkc-logo.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="copyright" content="HK Construction" />
        <meta name="distribution" content="Global" />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/x-icon"
          href="/images/HomePage/hkc-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/HomePage/hkc-logo.png"
        />
        <link rel="manifest" href="/images/HomePage/hkc-logo.png" />
        <link
          rel="mask-icon"
          href="/images/HomePage/hkc-logo.png"
          color="#666666"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="shortcut icon" href="/images/HomePage/hkc-logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
