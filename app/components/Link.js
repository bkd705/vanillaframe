function changePath(newPath) {
  window.location.hash = `/${newPath}`
}

function Link(path, title) {
  const handleClick = () => {
    window.location.hash = `/${path}`
  }

  const template = `
    <li id="${title}">${title}</li>
  `

  if(document.getElementById(title)) {
    document.getElementById(title).addEventListener('click', () => {
      console.log('click')
      handleClick()
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(title).addEventListener('click', () => {
      console.log('click')
      handleClick()
    })
  }, false);

  return template
}

export default Link