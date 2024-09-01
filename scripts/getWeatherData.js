import { apiInfo } from './apiInfo.js'

// test fetch

export async function getWeatherData (location) {
  const response = await fetch(apiInfo.getUrl(location))
  return response.json()
}
