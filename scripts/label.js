import { checkbox } from './checkbox.js'
import { slider } from './slider.js'

export const label = () => {
  const label$ = document.createElement('label')
  label$.className = 'switch'

  label$.appendChild(checkbox())
  label$.appendChild(slider())

  return label$
}
