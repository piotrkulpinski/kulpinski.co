import Container from '@/components/Container/Container'
import Section from '@/components/Section/Section'
import Testimonial from '@/components/Testimonial/Testimonial'
import Carousel from '@/components/Carousel/Carousel'

export default function TestimonialSection({ testimonials, slug }) {
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
