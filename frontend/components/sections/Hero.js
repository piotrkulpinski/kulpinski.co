import Container from '@/components/Container/Container'
import Section from '@/components/Section/Section'
import Hero from '@/components/Hero/Hero'

export default function HeroSection({ slug, ...params }) {
  return (
    <Section theme="dark" slug={slug}>
      <Container>
        <Hero {...params} />
      </Container>
    </Section>
  )
}
