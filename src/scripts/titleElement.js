export const titleElement = (tag = 'h1', classCss, content) => {
  const titleH1$ = document.createElement(tag)
  titleH1$.className = classCss
  titleH1$.textContent = content

  return titleH1$
}
