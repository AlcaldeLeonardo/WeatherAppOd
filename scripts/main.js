import { converterFtoC } from './converterFtoC.js'
import { getWeatherData } from './getWeatherData.js'
import { renderer } from './renderer.js'

renderer()

const weatherData = await getWeatherData('Chilecito')

console.log(weatherData)
console.log(converterFtoC(65))
