function galeria(destaque, fotos, callback) {
  for (var i = 0; i < fotos.length; i++) {
    fotos[i].addEventListener('click', function(){
      var clicado  = this.getAttribute('src');
      var texto    = this.getAttribute('alt');

      trocarFoto(clicado);

      if (typeof callback == 'function') {
        callback();
      }
      else {
        mostraTexto(texto);
      }
    });
  }

  function trocarFoto(clicado) {
    destaque.setAttribute('src', clicado);
  }

  function mostraTexto(texto) {
    alert(texto);
  }

}
