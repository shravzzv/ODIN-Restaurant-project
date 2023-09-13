const navbar = () => {
  const element = document.createElement('nav')
  const list = document.createElement('ul')
  const home = document.createElement('li')
  const menu = document.createElement('li')
  const about = document.createElement('li')

  home.textContent = 'Home'
  menu.textContent = 'Menu'
  about.textContent = 'About'
  list.appendChild(home)
  list.appendChild(menu)
  list.appendChild(about)
  element.appendChild(list)

  return element
}

export default navbar
