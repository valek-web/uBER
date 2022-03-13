window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header_menu'),
    menuItem = document.querySelectorAll('.menu_element'),
    hamburger = document.querySelector('.hamburger')

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active')
    menu.classList.toggle('menu_active')
  })

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active')
      menu.classList.toggle('menu_active')
    })
  })
})
