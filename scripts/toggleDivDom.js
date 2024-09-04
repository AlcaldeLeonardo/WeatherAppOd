export const toggleDivDom = () => {
  const toggle$ = document.createElement('div')
  toggle$.className = 'toggle'

  toggle$.appendChild(label())
  toggle$.appendChild(fToCelciusSpan())

  return toggle$
}

const label = () => {
  const label$ = document.createElement('label')
  label$.className = 'switch'

  label$.appendChild(checkbox())
  label$.appendChild(slider())

  return label$
}

const checkbox = () => {
  const checkbox$ = document.createElement('input')
  checkbox$.type = 'checkbox'
  checkbox$.id = 'unit-toggle'

  return checkbox$
}

const slider = () => {
  const slider$ = document.createElement('span')
  slider$.className = 'slider'

  return slider$
}

const fToCelciusSpan = () => {
  const span$ = document.createElement('span')
  span$.textContent = '°C  /  °F'

  return span$
}
