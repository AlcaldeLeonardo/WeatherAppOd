import { locationDivElement } from './locationDivElement.js'
import { toggleDivDom } from './toggleDivDom.js'

export const formElement = (classCss = 'form') => {
  const formDOM = document.createElement('form')
  formDOM.className = classCss

  formDOM.appendChild(locationDivElement())
  formDOM.appendChild(toggleDivDom())
  return formDOM
}
