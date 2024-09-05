import { $ } from './$.js'
import { getWeatherData } from './getWeatherData.js'
import { renderer } from './renderer.js'
import { todayCard } from './todayCard.js'
import { weekInfoSection } from './weekInfoSection.js'

export const inputSubmit = () => {
  const input$ = document.createElement('input')

  input$.type = 'submit'
  input$.className = 'submit form__submit'
  input$.value = 'Get Wheather'

  input$.addEventListener('click', async (event) => {
    const form = $('.form')

    if (form.checkValidity()) {
      event.preventDefault()
      try {
        const weatherData = await getWeatherData($('#entryLocation').value)
        if ($('.infoCard') !== null) $('.infoCard').remove()
        if ($('.weekInfoSection') !== null) $('.weekInfoSection').remove()

        renderer(todayCard(weatherData))
        renderer(weekInfoSection(weatherData))
      } catch (error) {
        console.error(error)
      }
    }
  })

  return input$
}
