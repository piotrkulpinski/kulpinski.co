import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '@pages/_app'
import { getStrapiMedia } from '@lib/media'

export default function Seo({ seo }) {
  const [currentUrl, setCurrentUrl] = useState()
  const { global } = useContext(GlobalContext)
  const seoWithDefaults = {
    ...global.defaultSeo,
    ...seo,
  }
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} — ${global.siteName}`,
    // Get full image URL
    shareImage: getStrapiMedia(seoWithDefaults.shareImage.data),
  }

  useEffect(() => {
    setCurrentUrl(document.URL);
  }, [])

  return (
    <Head>
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article
        ? <meta property="og:type" content="article" />
        : <meta property="og:type" content="website" />
      }
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
