export function getCardinalDirection (degrees) {
  const directions = [
    'N', 'NNW', 'NW', 'WNW', 'W', 'WSW', 'SW', 'SSW',
    'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE'
  ]

  // Each direction covers 22.5 degrees
  const index = Math.floor((degrees + 11.25) / 22.5) % 16

  return directions[index]
}
