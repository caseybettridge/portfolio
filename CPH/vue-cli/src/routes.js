import About from './components/About'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'

export const routes = [
  {
    path: '/about',
    component: About,
    name: 'About'
  },
  {
    path: '',
    component: Home,
    name: 'Home'
  },
  {
    path: '/work',
    component: Work,
    name: 'Work'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'Contact'
  }
]