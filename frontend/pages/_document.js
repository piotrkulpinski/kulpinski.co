import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const fontsUrl = '//fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700;800&family=Space+Grotesk:wght@400;600;700&display=optional'

  return (
    <Html>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/manifest.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        {/* Google Fonts */}
        <link rel="stylesheet" href={fontsUrl} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
