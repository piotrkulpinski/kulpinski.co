import Hero from '@/components/sections/Hero'
import Content from '@/components/sections/Content'
import Projects from '@/components/sections/Projects'

const getSectionComponent = ({ __component, ...rest }, index) => {
  let Section

  switch (__component) {
    case 'sections.hero':
      Section = Hero
      break
    case 'sections.content':
      Section = Content
      break
    case 'sections.projects':
      Section = Projects
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
