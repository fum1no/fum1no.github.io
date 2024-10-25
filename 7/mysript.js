window.onload = function () {
  function gallery(){
    let s = false;
    $('.images').slick({ 
    speed: 700,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3, // начальные настройки для десктопа
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
  }
  gallery();
  s = true;

  window.addEventListener("change", function () {
    gallery();
  });
};
