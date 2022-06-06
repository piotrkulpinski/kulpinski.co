import Hero from '@components/Sections/Hero'
import Cta from '@components/Sections/Cta'
import Content from '@components/Sections/Content'
import Projects from '@components/Sections/Projects'
import Testimonials from '@components/Sections/Testimonials'

const getSectionComponent = ({ __component, ...rest }, index) => {
  let Section

  switch (__component) {
    case 'sections.hero':
      Section = Hero
      break
    case 'sections.content':
      Section = Content
      break
    case 'sections.cta':
      Section = Cta
      break
    case 'sections.projects':
      Section = Projects
      break
    case 'sections.testimonials':
      Section = Testimonials
      break
  }

  return Section && <Section key={`index-${index}`} {...rest} />
}

const SectionManager = ({ sections }) => {
  return sections.map(getSectionComponent)
}

SectionManager.defaultProps = {
  sections: [],
}

export default SectionManager
