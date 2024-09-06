export const dateFormater = (datetime, format = 'dayWeek') => {
  const date = new Date(datetime)

  if (format === 'MM-DD') {
    const month = date.getUTCMonth() + 1
    const day = date.getUTCDate()

    const formattedMonth = month < 10 ? `0${month}` : month
    const formattedDay = day < 10 ? `0${day}` : day

    return `${formattedMonth}-${formattedDay}`
  }

  if (format === 'dayWeek') {
    const weekDayNum = date.getUTCDay()
    const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    const weekDay = weekDays[weekDayNum]

    return weekDay
  }
}
