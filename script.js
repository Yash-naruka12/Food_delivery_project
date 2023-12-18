let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    header.style.position = "fixed";
    header.style.backgroundColor = "#f5f6fa"
    header.style.boxShadow = "0 2px 2px grey"
  }
  else{
    header.style.position = "sticky";
  }
});

// for slick slider 

// Init slick slider + animation
$('.slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
	prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    let arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});
	
