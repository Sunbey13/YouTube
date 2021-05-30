const firstSwiper = new Swiper('.first-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.first-channel-button-next',
      prevEl: '.first-channel-button-prev',
    },

  });

  const recommendedSwiper = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1100:{
        slidesPerView: 2,
        spaceBetween: 20,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.recommended-button-next',
      prevEl: '.recommended-button-prev',
    },

  });

  const secondSwiper = new Swiper('.second-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.second-channel-button-next',
      prevEl: '.second-channel-button-prev',
    },

  });


  const searchButton = document.querySelector('.mobile-search');
  const mobileSearch = document.querySelector('.input-group');
  const logo = document.querySelector('.logo');
  searchButton.addEventListener('click', (event) => {
    mobileSearch.classList.toggle('is-open');
    logo.classList.add('hidden');
    searchButton.classList.add('hidden');
  });

  if(document.documentElement.scrollWidth <= 640){
    firstSwiper.destroy();
    secondSwiper.destroy();
    recommendedSwiper.destroy();
  }