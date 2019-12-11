ityped.init(document.querySelector("#ityped"), {
  strings: ['Hello World!', 'My name is Mirai_Fujihara', 'Welcome to My Portfolio Site!'],
  typeSpeed: 120,
  loop: false,
  startDelay: 200
})

$(function(){
  $('#port1').click(function(){
    $('.page-section').scrollTop();
  })
})