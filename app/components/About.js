function About() {
  const wrapper = document.createElement('div')
  const header = document.createElement('h2')
  header.innerText = 'About Page'
  wrapper.append(header)
  
  return wrapper
}

export default About