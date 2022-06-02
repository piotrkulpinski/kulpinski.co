import Container from '@/components/Container/Container'
import Section from '@/components/Section/Section'
import Project from '@/components/Project/Project'
import Label from '@/components/Label/Label'
import { Grid, GridItem } from '@/components/Grid/Grid'

export default function ProjectsSection({ title, projects, slug }) {
  return (
    <Section slug={slug}>
      <Container>
        <Label>{title}</Label>

        <Grid separated>
          {projects && projects.data && projects.data.map((project, index) =>
            <GridItem key={index}>
              <Project project={project.attributes} />
            </GridItem>
          )}
        </Grid>
      </Container>
    </Section>
  )
}
