import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import SectionManager from '@/components/SectionManager'
import { fetchAPI } from '@/lib/api'

export default function Error404({ error404 }) {
  return (
    <Layout>
      <Seo seo={error404.attributes.seo} />
      <SectionManager sections={error404.attributes.sections} />
    </Layout>
  )
}

export async function getStaticProps() {
  const [error404Res] = await Promise.all([
    fetchAPI('/error404', {
      populate: {
        seo: { populate: '*' },
        sections: { populate: '*' },
      },
    }),
  ])

  return {
    props: {
      error404: error404Res.data,
    },
    revalidate: 1,
  }
}
