const swiper = new Swiper('.js-slider', {
    // Optional parameters
    loop: true,
    effect: 'fade',
  
    // If we need pagination
    pagination: {
      el: '.js-slider-pagination',
      bulletClass: 'b-frontbyte__dotter-item',
      clickable: true
    }
  });
  