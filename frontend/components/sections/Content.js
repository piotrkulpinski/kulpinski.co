import Container from '@components/Container/Container'
import Section from '@components/Section/Section'
import Label from '@components/Label/Label'
import Copy from '@components/Copy/Copy'
import { Grid, GridItem } from '@components/Grid/Grid'

export default function ContentSection({ content, slug }) {
  return (
    <Section slug={slug}>
      <Container>
        <Grid separated>
          {content && content.map((cnt, index) =>
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
