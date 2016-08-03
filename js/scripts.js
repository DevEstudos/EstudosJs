document.addEventListener('DOMContentLoaded', function(){

  /* ----- galeria de gatos */
  var $gatosDestaque = document.querySelector('.gato-destaque');
  var $gatosFotos    = document.querySelectorAll('.gato-foto');

  galeria($gatosDestaque, $gatosFotos, function(){
    alert('é nois no Hangout');
  });


  /* ----- galeria de cachorros ----- */
  var $cachorrosDestaque = document.querySelector('.cachorro-destaque');
  var $cachorrosFotos    = document.querySelectorAll('.cachorro-foto');

  galeria($cachorrosDestaque, $cachorrosFotos);

});
