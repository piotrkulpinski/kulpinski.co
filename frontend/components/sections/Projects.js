import Container from '@/components/Container'
import Section from '@/components/Section'
import Project from '@/components/Project'
import Label from '@/components/partials/Label'
import { Grid, GridItem } from '@/components/partials/Grid'

export default function Projects({title, projects}) {
  return (
    <Section>
      <Container>
        <Label>{title}</Label>

        <Grid separated>
          {projects.data && projects.data.map((project, index) =>
            <GridItem key={index}>
              <Project project={project.attributes} />
            </GridItem>
          )}
        </Grid>
      </Container>
    </Section>
  )
}
