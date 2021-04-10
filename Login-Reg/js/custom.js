 var btn = $('#top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
 
var button = document.getElementById("btnViewAll");
button.onclick = function(){
  if(button.className=="inactive"){
  button.innerHTML="Show Less";
}
  else{
    button.innerHTML="Show More";

  }
};
