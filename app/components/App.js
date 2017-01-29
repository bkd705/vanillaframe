import Link, { changePath } from './Link'

function App(component) {
    const template = `
        <div>
            ${Link('about', 'About')}
            ${component}
        </div>
    `

    return template
}

export default App