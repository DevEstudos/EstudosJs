document.addEventListener('DOMContentLoaded', function(){
  // Um array sempre comeca com zero

  // Tipagem
  // Dois tipos de linguagens
  // Fortemente tipadas
  // Fracamente tipadas

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
