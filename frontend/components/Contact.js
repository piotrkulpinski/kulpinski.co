import Link from 'next/link'
import { Grid, GridItem } from '@/components/partials/Grid'

export default function Contact({ options, direction }) {
  return (
    <Grid narrow direction={direction}>
      {options.map((option, index) =>
        <GridItem key={index}>
          <div className="c-page-foot__label">{option.label}</div>

          <Link href={option.button.url}>
            <a target={option.button.target}><strong>{option.button.title}</strong></a>
          </Link>
        </GridItem>
      )}
    </Grid>
  )
}
