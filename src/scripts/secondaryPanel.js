import { getCardinalDirection } from './getCardinalDirection.js'

export const secondaryPanel = (currentConditions) => {
  const { humidity, windspeed, winddir } = currentConditions

  const secondaryPanel$ = document.createElement('div')
  const humidity$ = document.createElement('p')
  const wind$ = document.createElement('p')

  secondaryPanel$.className = 'secondaryPanel todaySection__secondaryPanel'

  humidity$.textContent = `Humidity: ${humidity}%`
  secondaryPanel$.appendChild(humidity$)

  wind$.textContent = `WindSpeed: ${getCardinalDirection(winddir)} ${parseFloat((windspeed) * 1.609).toFixed(1)} kph `
  secondaryPanel$.appendChild(wind$)

  return secondaryPanel$
}
