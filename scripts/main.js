import { formCard } from './formCard.js'
import { renderer } from './renderer.js'
import { getWeatherData } from './getWeatherData.js'
import { parallaxFX } from './parallaxFx.js'

const weatherData = await getWeatherData('chilecito')
console.log(weatherData)

renderer(formCard())
parallaxFX()
