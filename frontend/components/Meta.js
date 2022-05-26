import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/manifest.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}
