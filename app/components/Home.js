function Home() {
  const wrapper = document.createElement('div')
  const header = document.createElement('h2')
  header.innerText = 'Home Page'
  wrapper.append(header)
  
  return wrapper
}

export default Home