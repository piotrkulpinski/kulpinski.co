import '@/styles/main.scss'
import { createContext } from 'react'
import { fetchAPI } from '@/lib/api'

// Store Strapi Global object in context
export const GlobalContext = createContext()

function App({ Component, pageProps }) {
  return (
    <GlobalContext.Provider value={pageProps.global.attributes}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

App.getInitialProps = async (ctx) => {
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI('/global', {
    populate: {
      defaultSeo: {
        populate: '*',
      },
      contactButton: {
        populate: '*',
      },
      contactOptions: {
        populate: '*',
      },
      footerLinks: {
        populate: '*',
      },
    },
  })

  return { pageProps: { global: globalRes.data } }
}

export default App
