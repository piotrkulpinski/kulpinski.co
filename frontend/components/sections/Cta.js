import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/partials/Button'
import Note from '@/components/partials/Note'

export default function Cta({button, note}) {
  return (
    <Section>
      <Container>
        <Button button={button} />
        {note && <Note note={note} />}
      </Container>
    </Section>
  )
}
