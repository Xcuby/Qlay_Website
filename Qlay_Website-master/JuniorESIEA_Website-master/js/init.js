(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.parallax').parallax();
});

$('#savoir_plus').click(function(){
  var top = $(".presentation").offset().top;
  $('html, body').animate({
      scrollTop: top
  },1000,'easeInOutQuint');
  return false;
});

$('#competences-link').click(function(){
  var top = $("#competences").offset().top;
  $('html, body').animate({
      scrollTop: top
  },1000,'easeInOutQuint');
  return false;
});

$('#contact-link').click(function(){
  var top = $("#contact").offset().top;
  $('html, body').animate({
      scrollTop: top
  },1000,'easeInOutQuint');
  return false;
});

$(document).ready(function() {
  M.updateTextFields();
});

$('#envoi').click(function(){
  Email.send({
    SecureToken : "7edd308c-4271-4e6f-8843-f488fb586d07",
    To : 'junior-esiea@et.esiea.fr',
    From : "contact@junior-esiea.fr",
    Subject : "Message de " + $('#name').val(),
    Body : "De " + $('#name').val() + "<br><br>" + $('#message').val() + "<br><br>Par " + $('#email').val()
  }).then(message => 
      {
        document.getElementById("form").reset()
        M.toast({html: message})  
      }
  );
});
