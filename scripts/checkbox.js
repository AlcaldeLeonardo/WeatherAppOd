import { $$ } from './$$.js'
import { converterCtoF } from './convertCtoF.js'
import { converterFtoC } from './converterFtoC.js'
import { unitFlag } from './unitFlag.js'

export const checkbox = () => {
  const checkbox$ = document.createElement('input')
  checkbox$.type = 'checkbox'
  checkbox$.id = 'unit-toggle'

  checkbox$.addEventListener('change', () => {
    const tempUnit$$ = $$('.temp__unit')
    let convertedTemp
    tempUnit$$.forEach(tempUnit$ => {
      console.log(tempUnit$.textContent)
      if (unitFlag.isCelsius) {
        convertedTemp = converterCtoF(Number(tempUnit$.textContent)).toFixed(1)
      } else {
        convertedTemp = converterFtoC(Number(tempUnit$.textContent)).toFixed(1)
      }
      tempUnit$.textContent = convertedTemp
    })
    unitFlag.isCelsius = !unitFlag.isCelsius
    console.log(unitFlag.isCelsius)
  })

  return checkbox$
}
