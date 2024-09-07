export const inputlocation = () => {
  const input$ = document.createElement('input')

  input$.type = 'text'
  input$.id = 'entryLocation'
  input$.className = 'location form__location'
  input$.placeholder = 'Enter your city'
  input$.required = true

  return input$
}
