import Container from '@/components/Container'
import Section from '@/components/Section'
import Label from '@/components/partials/Label'
import Copy from '@/components/partials/Copy'
import { Grid, GridItem } from '@/components/partials/Grid'

export default function Content({content}) {
  return (
    <Section>
      <Container>
        <Grid separated>
          {content.map((cnt, index) =>
            <GridItem key={index}>
              <Label>{cnt.title}</Label>
              <Copy>{cnt.content}</Copy>
            </GridItem>
          )}
        </Grid>
      </Container>
    </Section>
  )
}
