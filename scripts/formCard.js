import { formElement } from './formElement.js'
import { titleElement } from './titleElement.js'

export const formCard = () => {
  const formCard$ = document.createElement('div')
  formCard$.className = 'container card'

  formCard$.appendChild(titleElement('h1', 'title titleH1 main__title', 'Wheather Forecast'))
  formCard$.appendChild(formElement())

  return formCard$
}
