import { dateFormater } from './dateFormater.js'
import { titleElement } from './titleElement.js'

export const weekInfoSection = (weatherData) => {
  const weekSection$ = document.createElement('div')
  const { days } = weatherData

  weekSection$.className = 'weekInfoSection card'
  weekSection$.appendChild(titleElement('h2', 'infoCard__title weekInfoSection__title', 'Week Forecast'))

  for (let index = 0; index < 8; index++) {
    weekSection$.appendChild(document.createElement('hr'))
    weekSection$.appendChild(weekDayDiv(days[index]))
  }

  return weekSection$
}

const weekDayDiv = (day) => {
  const weekDayDiv$ = document.createElement('div')
  weekDayDiv$.className = 'weekInfoSection__weekDayDiv weekDayDiv'

  weekDayDiv$.appendChild(dateInfoDiv(day))
  weekDayDiv$.appendChild(weekDayIcon(day))
  weekDayDiv$.appendChild(tempInfoDiv(day))
  weekDayDiv$.appendChild(descriptionDayDiv(day))
  weekDayDiv$.appendChild(humidityInfo(day))

  return weekDayDiv$
}

const dateInfoDiv = (day) => {
  const { datetime } = day

  const dateInfoDiv$ = document.createElement('div')
  dateInfoDiv$.className = 'weekInfoSection__date date'
  const weekDay$ = document.createElement('p')
  weekDay$.className = 'weekDayDiv__day day'
  const date$ = document.createElement('p')
  date$.className = 'weekDayDiv__dateNum dayNum'

  weekDay$.textContent = dateFormater(datetime)
  date$.textContent = dateFormater(datetime, 'MM-DD')

  dateInfoDiv$.appendChild(weekDay$)
  dateInfoDiv$.appendChild(date$)

  return dateInfoDiv$
}

const weekDayIcon = (day) => {
  const { icon } = day
  const iconDay$ = document.createElement('img')

  import(`../img/icons/${icon}.svg`)
    .then((module) => {
      iconDay$.src = module.default
      iconDay$.className = 'weekInfoSection__weekDayIcon weekDayIcon'
    })
    .catch((error) => console.log(error))

  return iconDay$
}

const tempInfoDiv = (day) => {
  const { tempmax, tempmin } = day

  const tempInfoDiv$ = document.createElement('div')
  const tempMax$ = document.createElement('span')
  const tempMin$ = document.createElement('span')

  tempMax$.innerHTML = `<span class="temp__unit">${tempmax}</span>°`
  tempMax$.className = 'weekInfoSection__tempMax tempMax'
  tempMin$.innerHTML = `<span class="temp__unit">${tempmin}</span>°`
  tempMin$.className = 'weekInfoSection__tempMin tempMin'

  tempInfoDiv$.className = 'weekInfoSection__tempInfo tempInfo'
  tempInfoDiv$.appendChild(tempMax$)
  tempInfoDiv$.appendChild(tempMin$)

  return tempInfoDiv$
}

const descriptionDayDiv = (day) => {
  const { description } = day
  const descriptionDiv$ = document.createElement('div')
  const description$ = document.createElement('p')

  descriptionDiv$.className = 'weekInfoSection__descriptionDiv descriptionDiv'
  description$.className = 'descriptionDiv__text'
  description$.textContent = description

  descriptionDiv$.appendChild(description$)

  return descriptionDiv$
}

const humidityInfo = (day) => {
  const { humidity } = day
  const humidity$ = document.createElement('p')
  humidity$.className = 'weekInfoSection__humidity humidity'
  humidity$.textContent = `💧 ${humidity}%`
  return humidity$
}
