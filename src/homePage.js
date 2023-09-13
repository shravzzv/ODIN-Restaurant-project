const homePage = () => {
  const element = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h1')
  const para1 = document.createElement('p')
  const para2 = document.createElement('p')

  image.src = 'https://images.unsplash.com/photo-1552566626-52f8b828add9'
  heading.textContent = "Eat at the world's best restaurant."
  para1.textContent =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur et, non necessitatibus repellendus soluta nam mollitia laborum tempora, porro, qui minima? Officia sapiente, velit mollitia consectetur incidunt blanditiis tempore aspernatur.'
  para2.textContent =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur et, non necessitatibus repellendus soluta nam mollitia laborum tempora, porro, qui minima? Officia sapiente, velit mollitia consectetur incidunt blanditiis tempore aspernatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur et, non necessitatibus repellendus soluta nam mollitia laborum tempora, porro, qui minima? Officia sapiente, velit mollitia consectetur incidunt blanditiis tempore aspernatur...'

  element.appendChild(image)
  element.appendChild(heading)
  element.appendChild(para1)
  element.appendChild(para2)

  return element
}

export default homePage
