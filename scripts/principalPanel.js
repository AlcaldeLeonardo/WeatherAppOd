export const principalPanel = (currentConditions) => {
  const principalPanel$ = document.createElement('div')
  const icon = document.createElement('img')
  const temp = document.createElement('p')
  const feelsLike = document.createElement('p')
  const currentConditions$ = document.createElement('p')

  principalPanel$.className = 'principalPanel todaySection__principalPanel'

  icon.src = `./img/icons/${currentConditions.icon}.svg`
  icon.className = 'principalPanel__icon'
  principalPanel$.appendChild(icon)

  temp.innerHTML = `<span class = "temp__unit" >${currentConditions.temp}</span>°`
  temp.className = 'principalPanel__temp'
  principalPanel$.appendChild(temp)

  feelsLike.innerHTML = `Feels like: <span class = "temp__unit" >${currentConditions.feelslike}</span>°`
  feelsLike.className = 'principalPanel__feelsLike'
  principalPanel$.appendChild(feelsLike)

  currentConditions$.textContent = currentConditions.conditions
  currentConditions$.className = 'principalPanel__currentConditions'
  principalPanel$.appendChild(currentConditions$)

  return principalPanel$
}
