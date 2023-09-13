const menuPage = () => {
  const element = document.createElement('div')
  const image = new Image()
  image.src = 'https://images.unsplash.com/photo-1557499305-bd68d0ad468d'
  image.alt = 'the menu'

  const heading = document.createElement('h1')
  heading.textContent = 'Our Food Menu'

  const menuList = document.createElement('ul')

  const menuItems = ['Burger', 'Pizza', 'Pasta', 'Salad', 'Steak']

  menuItems.forEach((itemText) => {
    const menuItem = document.createElement('li')
    menuItem.textContent = itemText
    menuList.appendChild(menuItem)
  })

  element.appendChild(image)
  element.appendChild(heading)
  element.appendChild(menuList)

  return element
}

export default menuPage
