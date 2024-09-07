import { fToCelciusSpan } from './fToCelciusSpan.js'
import { label } from './label.js'

export const toggleDivDom = () => {
  const toggle$ = document.createElement('div')
  toggle$.className = 'toggle'

  toggle$.appendChild(label())
  toggle$.appendChild(fToCelciusSpan())

  return toggle$
}
