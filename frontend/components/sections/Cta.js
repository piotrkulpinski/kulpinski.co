import Container from '@/components/Container/Container'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import Note from '@/components/Note/Note'

export default function CtaSection({ button, note, slug }) {
  return (
    <Section slug={slug}>
      <Container>
        <Button button={button} />
        {note && <Note note={note} />}
      </Container>
    </Section>
  )
}
