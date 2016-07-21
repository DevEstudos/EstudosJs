document.addEventListener('DOMContentLoaded', function(){
  //var fotos = $('.galeria-fotos');

  var fotos = document.querySelectorAll('.galeria-foto');

  for (var i = 0; i <= fotos.length - 1; i++) {

    fotos[i].addEventListener('click', function(){
      var caminho = this.getAttribute('src');

      var destaque = document.querySelector('.galeria-destaque');

      destaque.setAttribute('src', caminho);

      console.log(caminho);
    });

  }

});
