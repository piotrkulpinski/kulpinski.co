import NextImage from 'next/image'
import { getStrapiMedia } from '@lib/media'

export default function Image({ image, layout, priority, className }) {
  const { alternativeText, width, height } = image.attributes

  return (
    <NextImage
      layout={layout ?? 'responsive'}
      width={width ?? '100%'}
      height={height ?? '100%'}
      // objectFit='contain'
      priority={priority ?? false}
      src={getStrapiMedia(image)}
      alt={alternativeText}
      className={className}
    />
  )
}
