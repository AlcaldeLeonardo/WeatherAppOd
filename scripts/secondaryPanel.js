export const secondaryPanel = (currentConditions) => {
  const secondaryPanel$ = document.createElement('div')
  secondaryPanel$.className = 'secondaryPanel todaySection__secondaryPanel'

  const humidity = document.createElement('p')
  humidity.textContent = `Humidity: ${currentConditions.humidity}%`
  secondaryPanel$.appendChild(humidity)

  const wind = document.createElement('p')
  wind.textContent = `Wind: ${parseFloat((currentConditions.windspeed) * 1.609).toFixed(1)} kph`
  secondaryPanel$.appendChild(wind)

  return secondaryPanel$
}
