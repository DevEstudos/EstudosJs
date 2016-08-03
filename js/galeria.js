function galeria(destaque, fotos, alt) {

  for (var i = 0; i < fotos.length; i++) {
    fotos[i].addEventListener('click', function(){
      var clicado  = this.getAttribute('src');
      var textoAlt = this.getAttribute('alt');

      trocarFoto(clicado);

      if (alt == true) {
        mostrarAlt(textoAlt);
      }
    });
  }

  function trocarFoto(clicado) {
    destaque.setAttribute('src', clicado);
  }

  function mostrarAlt(textoAlt) {
    alert(textoAlt);
  }

}
