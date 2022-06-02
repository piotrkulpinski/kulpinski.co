import qs from 'qs'

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${process.env.API_TOKEN || '0ef7d832be7ec3452672d400c8e36ec141536c4e0819fd950fd7f95f1978dfe625042f6c237b433fe804a862044a3c64020284afe4dd55895edcfd701a0e58d16666ce17e5d6f2106f5e1c58ba2181a50d50170d79cdfbe1697d8a0681db0051e2bc7f36758278d1fe2620ffa8a51d2611f3dd8b70fb7ab2ebfbeca25eac9196'}`
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  }
  const data = await response.json()
  return data
}
