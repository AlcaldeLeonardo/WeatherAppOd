import { titleElement } from './titleElement.js'

export const todayCard = (weatherData) => {
  const { currentConditions } = weatherData
  const infoCard$ = document.createElement('div')

  infoCard$.className = 'infoCard card'

  infoCard$.appendChild(titleElement('h2', 'infoCard__title', "Today's Forecast"))
  infoCard$.appendChild(document.createElement('hr'))
  infoCard$.appendChild(infoTodaySection(currentConditions))

  return infoCard$
}

const infoTodaySection = (currentConditions) => {
  const todaySection$ = document.createElement('div')

  todaySection$.className = 'infoCard__todaySection todaySection'
  todaySection$.appendChild(principalPanel(currentConditions))
  todaySection$.appendChild(secondaryPanel(currentConditions))

  return todaySection$
}

const principalPanel = (currentConditions) => {
  const principalPanel$ = document.createElement('div')
  const temp = document.createElement('p')
  const feelsLike = document.createElement('p')
  const currentConditions$ = document.createElement('p')

  principalPanel$.className = 'principalPanel todaySection__principalPanel'

  temp.textContent = `${currentConditions.temp}`
  principalPanel$.appendChild(temp)

  feelsLike.textContent = `Feels like: ${currentConditions.feelslike}`
  principalPanel$.appendChild(feelsLike)

  currentConditions$.textContent = currentConditions.conditions
  principalPanel$.appendChild(currentConditions$)

  return principalPanel$
}

const secondaryPanel = (currentConditions) => {
  const secondaryPanel$ = document.createElement('div')
  secondaryPanel$.className = 'secondaryPanel todaySection__secondaryPanel'

  return secondaryPanel$
}
