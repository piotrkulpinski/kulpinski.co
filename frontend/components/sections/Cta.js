import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/partials/Button'
import Note from '@/components/partials/Note'

export default function Cta({ button, note, slug }) {
  return (
    <Section slug={slug}>
      <Container>
        <Button button={button} />
        {note && <Note note={note} />}
      </Container>
    </Section>
  )
}
