document.addEventListener('DOMContentLoaded', function(){

  var galeriaDestaque = document.querySelector('.galeria-destaque');
  var galeriaFotos    = document.querySelectorAll('.galeria-foto');

  function galeriaTrocar() {
    var galeriaClicado = this.getAttribute('src');

    galeriaDestaque.setAttribute('src', galeriaClicado);
  }

  for (var i = 0; i < galeriaFotos.length; i++) {
    galeriaFotos[i].addEventListener('click', galeriaTrocar);
  }

});
