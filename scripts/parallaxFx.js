import { DomElement } from './DomElements.js'

export function parallaxFX () {
  const background = DomElement.body

  window.addEventListener('scroll', () => {
    background.style.backgroundPositionY = +(window.scrollY / 1.3) + 'px'
  })
}
