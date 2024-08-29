export class apiInfo {
  static getUrl = (location) => {
    const KEY = 'CPV3DEH2PTTNNPF98ZN2AWA76'
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${KEY}`
  }
}
