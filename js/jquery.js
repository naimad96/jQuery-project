let menuIcon = $('.menu-icon');
let scroll = window.scrollTop;
//Menu icon animation
menuIcon.on('click',function(){
  $(".navigation-list-hidden").slideDown(600)/*.animate({width:'toggle'},600)*/.attr('class','navigation-list');
});
$('.close-icon').on('click',function(){
  $('.navigation-list').animate({width:'toggle'},600);
  setTimeout(
    function(){
      $('.navigation-list').attr('class','navigation-list-hidden');
    },1100);
});
 $(window).scroll(function(){
   let scrollV = $(window).scrollTop();
   if(scrollV > 100){
         $('.logo-container').attr('class','logo-container-opacity');
       }else{
         $('.logo-container-opacity').attr('class','logo-container');

       }
 });
