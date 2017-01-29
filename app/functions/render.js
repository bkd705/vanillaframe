function router(components, routes, location) {
  const hash = location.split('#/')[1]
  let component

  if(routes.indexOf(hash) != -1) {
    component = components.filter(x => x.route === hash)
  } else {
    console.log('else')
    component = components.filter(x => x.route === 'default')
  }

  return component[0].component()
}

export function domRender(wrapper, components, routes, element) {
  element.insertAdjacentHTML('afterbegin', wrapper(router(components, routes, window.location.hash)))

  window.addEventListener('hashchange', (event) => {
    element.innerHTML = ''
    element.insertAdjacentHTML('afterbegin', wrapper(router(components, routes, event.newURL)))
  })
}