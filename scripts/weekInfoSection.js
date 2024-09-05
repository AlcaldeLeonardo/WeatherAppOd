import { dateFormater } from './dateFormater.js'
import { titleElement } from './titleElement.js'

export const weekInfoSection = (weatherData) => {
  const weekSection$ = document.createElement('div')
  const { days } = weatherData

  weekSection$.className = 'weekInfoSection card'
  weekSection$.appendChild(titleElement('h2', 'infoCard__title weekInfoSection__title', 'Week Forecast'))
  weekSection$.appendChild(document.createElement('hr'))

  for (let index = 0; index < 8; index++) {
    weekSection$.appendChild(weekDayDiv(days[index]))
    weekSection$.appendChild(document.createElement('hr'))
  }

  return weekSection$
}

const weekDayDiv = (day) => {
  const weekDayDiv$ = document.createElement('div')
  weekDayDiv$.className = 'weekInfoSection__weekDayDiv weekDayDiv'

  weekDayDiv$.appendChild(dateInfoDiv(day))
  weekDayDiv$.appendChild(weekDayIcon(day))

  console.log(day)

  return weekDayDiv$
}

const dateInfoDiv = (day) => {
  const { datetime } = day

  const dateInfoDiv$ = document.createElement('div')
  dateInfoDiv$.className = 'weekDayDiv__date date'
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

  iconDay$.src = `../img/icons/${icon}.svg`
  iconDay$.className = 'weekInfoSection__weekDayIcon weekDayIcon'

  return iconDay$
}
