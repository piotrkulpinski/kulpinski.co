import { getStrapiURL } from "@/lib/api"

export function getStrapiMedia(media) {
  if (!media) {
    return null
  }

  const { url } = media.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
