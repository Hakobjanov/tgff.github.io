const config = {
  type: 'carousel',
  autoplay: 3000
}

new Glide('.glide', config).mount()

new WOW().init()

const menuIcon = document.querySelector('.hamburger-menu')
const navBar = document.querySelector('.nav')

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('change');
})