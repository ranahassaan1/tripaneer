$(document).scroll(function () {
  var $nav = $(".site-header");
  $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  arrows: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
});
$(".comments-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
  infinite: true,
});

$(document).ready(function () {
  // calender initial
  $("#calendar-demo").dcalendar();

  // for navbar mobile menu

  $(".navbar-toggler").click(function () {
    var target = $(this).next("#navbarSupportedContent");
    target.toggleClass("show-sidemenu");
  });

  // for currency selection

  $(".currency-option").click(function () {
    var clickedButton = $(this); // Store the clicked button
    $(".currency-option").each(function () {
      $(this).removeClass("selected");
    });
    clickedButton.addClass("selected");
  });

  // for hide/show text

  var showChar = 250;
  var dots = ".... ";
  var moreText = "More";
  var lessText = "Less";

  $(".d-full-text").each(function () {
    var content = $(this).html();

    if (content.length > showChar) {
      var cont = content.substr(0, showChar);
      var restOfTheText = content.substr(showChar, content.length - showChar);

      var html =
        cont +
        '<span class="dots">' +
        dots +
        '</span><span class="load-more-content"><span>' +
        restOfTheText +
        '</span><button type="button" class="btn_link d-line-block text-decoration-underline">' +
        moreText +
        "</button></span>";

      $(this).html(html);
    }
  });

  $(".btn_link").click(function () {
    if ($(this).hasClass("test")) {
      $(this).removeClass("test");
      $(this).html(moreText);
    } else {
      $(this).addClass("test");
      $(this).html(lessText);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });

  // Close all accordions on button click
  $("#closeAllButton").on("click", function () {
    $(".accordion-item .accordion-button").toggleClass("collapsed");
    $(".accordion-item .accordion-collapse").toggleClass("show");
    var buttonText = $(".accordion .accordion-collapse").hasClass("show")
      ? "-- Hide all"
      : "+ Expand all";
    $(this).text(buttonText);
  });

  // faviort button

  $(".add-fvrt").click(function () {
    $(".fvrt-icon").each(function () {
      var dataTarget = $(this).attr("data-target");
      if (dataTarget === "unlike") {
        $(this).attr("data-target", "liked");
        $(this).find(".unlike-heart").removeClass("d-block").addClass("d-none");
        $(this).find(".liked-heart").removeClass("d-none").addClass("d-block");
      } else {
        $(this).attr("data-target", "unlike");
        $(this).find(".unlike-heart").removeClass("d-none").addClass("d-block");
        $(this).find(".liked-heart").removeClass("d-block").addClass("d-none");
      }
    });
  });
});
