export function getCardinalDirection (degrees) {
  const directions = [
    'N', 'NNE', 'NE', 'ENE', 'W', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'
  ]

  // Each direction covers 22.5 degrees
  const index = Math.floor((degrees + 11.25) / 22.5) % 16

  return directions[index]
}
