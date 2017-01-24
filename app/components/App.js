import Link from './Link'

function App(component) {
    const wrapper = document.createElement('div')
    const nav = document.createElement('nav')
    
    nav.append(Link('about', 'About'))
    nav.append(Link('contact', 'Contact'))
    nav.append(Link('', 'Home'))

    wrapper.append(nav)
    wrapper.append(component)

    return wrapper
}

export default App