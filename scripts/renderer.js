import { DomElement } from './DomElements.js'

export function renderer () {
  const body = DomElement.body
  body.innerHTML =
    `<div class="main container">
      <h1 class="title titleH1 main__title">Wheather Forecast</h1>
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
        <div class="toggle">
          <label>
            <input type="checkbox" id="unit-toggle">
            <span class="slider"></span>
          </label>
            <br>
            <br>
            <span>°C  /  °F</span>
        </div>
      </form>
    </div>`
}
