import NextImage from 'next/image'
import { getStrapiMedia } from '@/lib/media'

export default function Image({ image, style }) {
  const { alternativeText, width, height } = image.data.attributes

  return (
    <NextImage
      // loader={loader}
      layout='responsive'
      width={width || '100%'}
      height={height || '100%'}
      objectFit='contain'
      src={getStrapiMedia(image)}
      alt={alternativeText}
    />
  )
}
