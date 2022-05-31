import Container from '@/components/Container'
import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'

export default function Projects({ testimonials }) {
  return (
    <Section>
      <Container>
        {testimonials.data && testimonials.data.map((testimonial, index) =>
          <Testimonial testimonial={testimonial.attributes} key={index} />
        )}
      </Container>
    </Section>
  )
}
