if(document.documentElement.clientWidth > 1700){
  numSlides = 6;
} else {
  numSlides = 5;
}
const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: numSlides,
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },

  });

  const swiper1 = new Swiper('.channel-slider-1', {
    // Optional parameters
    loop: true,
    slidesPerView: numSlides,
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-1',
      prevEl: '.channel-button-prev-1',
    },

  });

  const swiper2 = new Swiper('.channel-slider-2', {
    // Optional parameters
    loop: true,
    slidesPerView: numSlides,
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-2',
      prevEl: '.channel-button-prev-2',
    },

  });