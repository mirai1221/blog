ityped.init(document.querySelector("#ityped"), {
  strings: [
    "Hello World!",
    "My name is Mirai_Fujihara",
    "Welcome to My Portfolio Site!",
  ],
  typeSpeed: 120,
  loop: false,
  startDelay: 200,
});

jQuery(window).on("scroll", function ($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery(".floating").show();
  } else {
    jQuery(".floating").hide();
  }
});

jQuery(".floating").click(function () {
  jQuery("body,html").animate(
    {
      scrollTop: 0,
    },
    3000,
    "linear"
  );
  return false;
});

$(function () {
  var header = $("#header");

  header_offset = header.offset();

  header_height = header.height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > header_offset.top + header_height) {
      header.addClass("scroll");
    } else {
      header.removeClass("scroll");
    }
  });
});

$(function () {
  $(".pic_box").hover(
    function () {
      $(">span", this).animate(
        {
          top: "0px",
        },
        500
      );
    },
    function () {
      $(">span", this).animate(
        {
          top: "140px",
        },
        500
      );
    }
  );
});

var header = $("#main").offset().top;

$("#navbar").click(function () {
  $("html,body").animate(
    {
      scrollTop: header,
    },
    {
      queue: false,
    }
  );
});

var profile = $("#profile").offset().top;

$("#navbar1").click(function () {
  $("html,body").animate(
    {
      scrollTop: profile,
    },
    {
      queue: false,
    }
  );
});

var portfolio = $("#portfolio").offset().top;

$("#navbar2").click(function () {
  $("html,body").animate(
    {
      scrollTop: portfolio,
    },
    {
      queue: false,
    }
  );
});

$(".main-button").click(function () {
  $("html,body").animate(
    {
      scrollTop: portfolio,
    },
    {
      queue: false,
    }
  );
});

var skills = $("#skills").offset().top;

$("#navbar3").click(function () {
  $("html,body").animate(
    {
      scrollTop: skills,
    },
    {
      queue: false,
    }
  );
});
