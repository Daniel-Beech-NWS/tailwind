const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)


const swiper = new Swiper('.sample-slider',  {
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
          640: {
            slidesPerView: 1,

          },
          768: {
            slidesPerView: 1,

          },
          1024: {
            slidesPerView: 5,

          },
        },
      });
