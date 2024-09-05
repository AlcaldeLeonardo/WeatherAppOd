import { inputlocation } from './inputlocation.js'
import { inputSubmit } from './inputSubmit.js'

export const locationDivElement = () => {
  const div$ = document.createElement('div')

  div$.className = 'locationDiv'

  div$.append(inputlocation())
  div$.append(inputSubmit())

  return div$
}
