import Layout from '@components/Layout/Layout'
import Seo from '@components/Seo/Seo'
import SectionManager from '@components/Sections/Manager'
import { fetchAPI } from '@lib/api'

export default function Home({ home }) {
  return (
    <Layout>
      <Seo seo={home.attributes.seo} />
      <SectionManager sections={home.attributes.sections} />
    </Layout>
  )
}

export async function getStaticProps() {
  const [homeRes] = await Promise.all([
    fetchAPI('/home', {
      populate: {
        seo: { populate: '*' },
        sections: { populate: '*' },
      },
    }),
  ])

  return {
    props: {
      home: homeRes.data,
    },
    revalidate: 1,
  }
}
