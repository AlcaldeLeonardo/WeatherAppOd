export const checkbox = () => {
  const checkbox$ = document.createElement('input')
  checkbox$.type = 'checkbox'
  checkbox$.id = 'unit-toggle'

  return checkbox$
}
