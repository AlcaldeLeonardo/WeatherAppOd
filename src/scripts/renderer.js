import { DomElement } from './DomElements.js'

export function renderer (element) {
  const { body } = DomElement
  body.appendChild(element)
}
