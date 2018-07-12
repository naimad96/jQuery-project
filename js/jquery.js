let signupBtn = $('.signup');
let loginBtn = $('.login');
let loginForm = $('.login-form-hidden');
loginBtn.on('click', function(){
  loginForm.animate({height:'toggle'}).attr('class','login-form');
});
