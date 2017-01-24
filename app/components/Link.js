function changePath(newPath) {
  window.location.hash = `/${newPath}`
}

function Link(path, title) {
  const linkElement = document.createElement('li')
  linkElement.innerText = title
  linkElement.addEventListener('click', () => {
    changePath(path)
  })

  return linkElement
}

export default Link