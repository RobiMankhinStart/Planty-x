// ........slick slider.....
$(".center").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  arrows: false,
  //   slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
