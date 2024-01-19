$(function () {
  // faq ----------------------------------------------------------------------------
  $(".faq__acc-link").on("click", function (e) {
    if ($(this).hasClass("faq__acc-link--active")) {
      $(this).removeClass("faq__acc-link--active");
      $(this).removeClass("faq__acc-link--active");
      $(this).children(".faq__acc-text").slideUp();
    } else {
      $(".faq__acc-link").removeClass("faq__acc-link--active");
      $(".faq__acc-text").not(".faq__acc-textlink").slideUp();
      $(this).addClass("faq__acc-link--active");
      $(this).children(".faq__acc-text").slideDown();
    }
  });

  // case slider
  $(".case__slider").slick({
    slidesToShow: 1,
    dots: false,
    waitForAnimate: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:
      "<img src='assets/images/icons/arrow-left.svg' class='myslider__slider-prev' alt='prev'>",
    nextArrow:
      "<img src='assets/images/icons/arrow-right.svg' class='myslider__slider-next' alt='next'>",
  });

  // testimonials slider
  $(".testimonials__slider").slick({
    slidesToShow: 1,
    dots: false,
    waitForAnimate: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow:
      "<img src='assets/images/icons/arrow-left.svg' class='myslider__slider-prev' alt='prev'>",
    nextArrow:
      "<img src='assets/images/icons/arrow-right.svg' class='myslider__slider-next' alt='next'>",
  });

  // Form
  $(".form__btn").on("click", function (event) {
    event.preventDefault();

    $(".form-box").css("display", "none");
    $(".form-sent").css("display", "block");

    $.ajax({
      url: "yoururl",
      type: "POST",
      data: yourData,
      success: function (result) {
        console.log(result);
      },
    });
  });
});
