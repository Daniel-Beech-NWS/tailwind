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
        observer: true,
        observeParents: true,
        loop: true,
        rebuildOnUpdate: true,

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
           
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
         
          },
          1024: {
            slidesPerView: 4,
      
          }
        }
      })

      const swipers = new Swiper('.sample-sliders',  {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        loop: true,
        rebuildOnUpdate: true,

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
           
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
         
          },
          768: {
            slidesPerView: 1,
         
          },
          1024: {
            slidesPerView: 4,
      
          }
        }
      })

