window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header_menu'),
    menuItem = document.querySelectorAll('.menu_element'),
    hamburger = document.querySelector('.hamburger'),
    bg_for_menu = document.querySelector('.bg_for_menu')

  console.log(bg_for_menu)

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active')
    menu.classList.toggle('active')
    bg_for_menu.classList.toggle('active_bg')
  })

  bg_for_menu.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active')
    menu.classList.toggle('active')
    bg_for_menu.classList.toggle('active_bg')
  })

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active')
      menu.classList.toggle('active')
      bg_for_menu.classList.toggle('active_bg')
    })
  })
})
