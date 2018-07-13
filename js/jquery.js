let menuIcon = $('.menu-icon');

menuIcon.on('click',function(){
  $(".navigation-list-hidden").animate({ width: 'toggle' },200).attr('class','navigation-list');
});
$('.close-icon').on('click',function(){
  $('.navigation-list').animate({ width: 'toggle' },200).attr('class','navigation-list-hidden');
});
