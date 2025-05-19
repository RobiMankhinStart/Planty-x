// ..........aos....
AOS.init();

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
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        centerPadding: "150px",

        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        centerMode: true,
        centerPadding: "4px",
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
