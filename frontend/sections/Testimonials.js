import Container from '@components/Container/Container'
import Section from '@components/Section/Section'
import Testimonial from '@components/Testimonial/Testimonial'
import Carousel from '@components/Carousel/Carousel'

export default function TestimonialSection({ testimonials, slug }) {
  return (
    <Section slug={slug}>
      <Container>
        <Carousel>
          {testimonials.data && testimonials.data.map((testimonial, index) => {
            const { quotes, ...profile } = testimonial.attributes
            return <Testimonial profile={profile} quote={quotes[0]} key={index} />
          })}
        </Carousel>
      </Container>
    </Section>
  )
}
