import Container from '@/components/Container'
import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'
import Carousel from '@/components/partials/Carousel'

export default function Projects({ testimonials, slug }) {
  return (
    <Section slug={slug}>
      <Container>
        <Carousel>
          {testimonials.data && testimonials.data.map((testimonial, index) =>
            <Testimonial testimonial={testimonial.attributes} key={index} />
          )}
        </Carousel>
      </Container>
    </Section>
  )
}
