import { formCard } from './formCard.js'
import { todayCard } from './todayCard.js'
import { renderer } from './renderer.js'
import { getWeatherData } from './getWeatherData.js'

const weatherData = await getWeatherData('chilecito')
console.log(weatherData.currentConditions)

renderer(formCard())
renderer(todayCard(weatherData))
