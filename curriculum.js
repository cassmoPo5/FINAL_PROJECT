$('.heading').click(function () {
  
    $(this).parent('li').toggleClass('the-active').find('.text').slideToggle();
});