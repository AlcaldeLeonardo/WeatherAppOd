import { DomElement } from './DomElements.js'

export function renderer () {
  const body = DomElement.body
  body.innerHTML =
    `<div class="main container">
      <h1 class="title main__title">Wheather Forecast</h1>
      <form action="#" class="form main__form">
        <div class="locationDiv">
          <input
            type="text"
            class="location form__location"
            placeholder="Enter your city"
          />
          <button type="submit" class="submit form__submit">
            Get Wheather
          </button>
        </div>
        <input type="checkbox" class="unit form__unit" />
        <span class="slider"></span>
        <span>°C / °F</span>
      </form>
    </div>`
}
