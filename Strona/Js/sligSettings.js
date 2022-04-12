$('.team-carousel').slick({
  arrows: false,
  autoplay: true,
  mobileFirst: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [

    {
        breakpoint: 768,
        settings: { slidesToshow: 2}
    },

     {
        breakpoint: 992,
        settings: { slidesToshow: 2}
    }

  ]
});

// settings: "unslick"

