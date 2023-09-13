import './styles/style.css'
import homePage from './pages/homePage'
import menuPage from './pages/menuPage'
import aboutPage from './pages/aboutPage'
import navbar from './components/navbar'

const content = document.querySelector('#content')
const pageContainer = document.createElement('main')

content.appendChild(navbar())
content.appendChild(pageContainer)

pageContainer.appendChild(homePage())

const handleTabClick = (e) => {
  pageContainer.innerHTML = ''

  if (e.target.textContent === 'Home') {
    pageContainer.appendChild(homePage())
  }
  if (e.target.textContent === 'Menu') {
    pageContainer.appendChild(menuPage())
  }
  if (e.target.textContent === 'About') {
    pageContainer.appendChild(aboutPage())
  }
}

const tabs = document.querySelectorAll('nav li')
Array.from(tabs).forEach((tab) => tab.addEventListener('click', handleTabClick))
