export const principalPanel = (currentConditions) => {
  const principalPanel$ = document.createElement('div')
  const icon = document.createElement('img')
  const temp = document.createElement('p')
  const feelsLike = document.createElement('p')
  const currentConditions$ = document.createElement('p')

  principalPanel$.className = 'principalPanel todaySection__principalPanel'

  icon.src = `../img/icons/${currentConditions.icon}.svg`
  icon.className = 'principalPanel__icon'
  principalPanel$.appendChild(icon)

  temp.textContent = `${currentConditions.temp}°`
  temp.className = 'principalPanel__temp'
  principalPanel$.appendChild(temp)

  feelsLike.textContent = `Feels like: ${currentConditions.feelslike}°`
  feelsLike.className = 'principalPanel__feelsLike'
  principalPanel$.appendChild(feelsLike)

  currentConditions$.textContent = currentConditions.conditions
  currentConditions$.className = 'principalPanel__currentConditions'
  principalPanel$.appendChild(currentConditions$)

  return principalPanel$
}
