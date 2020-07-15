$(function(){

  $('.rate-star').rateYo({
    rating: 4,
    starWidth: "14px",
    spacing: "4px",
    readOnly: true
  });

  $('.products-weekly__slider').slick({
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img class="slick-img" src="images/icons/chevron-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img class="slick-img" src="images/icons/chevron-right.svg" alt=""></button>'
  });

  $('.products-newest__filter').on('click', function(){
    $('.products-newest__dropdown-inner').slideToggle();
  });

  $('.products-weekly__item').css(
    'display',''
  );

  var mixer = mixitup('.product-card__inner');

});