import { secondaryPanel } from './secondaryPanel.js'
import { principalPanel } from './principalPanel.js'

export const infoTodaySection = (currentConditions) => {
  const todaySection$ = document.createElement('div')

  todaySection$.className = 'infoCard__todaySection todaySection'
  todaySection$.appendChild(principalPanel(currentConditions))
  todaySection$.appendChild(secondaryPanel(currentConditions))

  return todaySection$
}
