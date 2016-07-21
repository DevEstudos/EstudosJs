document.addEventListener('DOMContentLoaded', function(){
  //var fotos = $('.galeria-fotos');

  // Um array sempre comeca com zero

  var fotos = document.querySelectorAll('.galeria-foto');
  var i     = 1;
  var total = fotos.length - 1;

  for (i; i <= total; i++) {
    fotos[i].addEventListener('click', function(){
      var caminho = this.getAttribute('src');

      var destaque = document.querySelector('.galeria-destaque');

      destaque.setAttribute('src', caminho);
    });

  }

});
