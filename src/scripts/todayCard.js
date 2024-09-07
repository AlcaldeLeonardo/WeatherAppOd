import { infoTodaySection } from './infoTodaySection.js'
import { titleElement } from './titleElement.js'

export const todayCard = (weatherData) => {
  const { currentConditions, resolvedAddress } = weatherData
  const infoCard$ = document.createElement('div')

  infoCard$.className = 'infoCard card'

  infoCard$.appendChild(titleElement('h2', 'infoCard__title', `Today's Forecast: ${resolvedAddress}`))
  infoCard$.appendChild(document.createElement('hr'))
  infoCard$.appendChild(infoTodaySection(currentConditions))

  return infoCard$
}
