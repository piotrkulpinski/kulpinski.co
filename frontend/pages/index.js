import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import { fetchAPI } from "@/lib/api"

export default function Home ({ home }) {
  return (
    <Layout>
      <Seo seo={home.attributes.seo} />
    </Layout>
  )
}

export async function getStaticProps() {
  const [homeRes] = await Promise.all([
    fetchAPI("/home", {
      populate: {
        seo: { populate: "*" },
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
