const aboutPage = () => {
  const element = document.createElement('div')
  const image = new Image()
  image.src = 'https://images.unsplash.com/photo-1555786766-e1e69380c4bc'
  image.alt = 'a toy minion standing with hands folded'

  const heading = document.createElement('h1')
  const para = document.createElement('p')

  heading.textContent = 'About the restaurant'
  para.textContent =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aut minima esse sapiente ut nulla odio? Harum necessitatibus modi dolorem explicabo laudantium ratione ducimus dignissimos excepturi magni ad ipsa, officiis natus enim cupiditate tempore totam dolores cumque iste blanditiis ea. Consectetur debitis doloribus accusamus enim eum animi, tempora possimus tempore.'

  element.appendChild(image)
  element.appendChild(heading)
  element.appendChild(para)

  return element
}

export default aboutPage
