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
  input$.className = 'location form__location'
  input$.placeholder = 'Enter your city'

  return input$
}

const inputSubmit = () => {
  const input$ = document.createElement('input')

  input$.type = 'submit'
  input$.className = 'submit form__submit'
  input$.value = 'Get Wheather'

  return input$
}
