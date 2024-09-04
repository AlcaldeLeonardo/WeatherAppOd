import { $ } from './$.js'
import { converterFtoC } from './converterFtoC.js'
import { getWeatherData } from './getWeatherData.js'

export const locationDivElement = () => {
  const div$ = document.createElement('div')

  div$.className = 'locationDiv'

  div$.append(inputlocation())
  div$.append(inputSubmit())

  return div$
}

const inputlocation = () => {
  const input$ = document.createElement('input')

  input$.type = 'text'
  input$.id = 'entryLocation'
  input$.className = 'location form__location'
  input$.placeholder = 'Enter your city'
  input$.required = true

  return input$
}

const inputSubmit = () => {
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

        console.log(weatherData)
        console.log(converterFtoC(weatherData.currentConditions.temp))
      } catch (error) {
        console.error(error)
      }
    }
  })

  return input$
}
