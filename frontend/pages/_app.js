import App from 'next/app'
import '@/styles/main.scss'
import { createContext } from 'react'
import { fetchAPI } from '@/lib/api'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

function MyApp({ Component, pageProps }) {
  const { global, menus } = pageProps

  return (
    <GlobalContext.Provider value={{ global: global.data.attributes, menus }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const [global, menus] = await Promise.all([
    fetchAPI('/global', {
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
    }),
    fetchAPI('/menus', {
      nested: true,
    }),
  ])

  return {
    ...appProps, pageProps: { global, menus },
  }
}

export default MyApp
