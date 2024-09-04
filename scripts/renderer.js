import { DomElement } from './DomElements.js'
import { formCard } from './formCard.js'

export function renderer () {
  const body = DomElement.body
  body.appendChild(formCard())
}
