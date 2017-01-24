import { domRender, router } from './functions/render'

import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'


const components = [
  { route: 'about', component: About },
  { route: 'contact', component: Contact },
  { route: 'default', component: Home }
]

const routes = ['about', 'contact']

domRender(
  App,
  components,
  routes,
  document.getElementById('root')
)

