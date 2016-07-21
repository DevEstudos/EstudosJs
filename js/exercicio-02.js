document.addEventListener('DOMContentLoaded', function(){
  // etapa 1
  // var fotos = document.querySelectorAll('.galeria-foto');
  // console.log('fotos');


  // etapa 2
  // var fotos = document.querySelectorAll('.galeria-foto');
  //
  // for (var i = 0; i <= fotos.length - 1; i++) {
  //   console.log('posicao: ' + i);
  // }



  // etapa 3
  // var fotos = document.querySelectorAll('.galeria-foto');
  //
  // for (var i = 0; i <= fotos.length - 1; i++) {
  //
  //   fotos[i].addEventListener('click', function(){
  //     console.log('Você clicou no: ' + this);
  //   });
  //
  // }



  // etapa 4
  // var fotos = document.querySelectorAll('.galeria-foto');
  //
  // for (var i = 0; i <= fotos.length - 1; i++) {
  //
  //   fotos[i].addEventListener('click', function(){
  //     var caminho = this.getAttribute('src');
  //
  //     console.log('caminho da imagem: ' + caminho);
  //   });
  //
  // }


  // etapa 5
  // var fotos = document.querySelectorAll('.galeria-foto');
  //
  // for (var i = 0; i <= fotos.length - 1; i++) {
  //
  //   fotos[i].addEventListener('click', function(){
  //     var caminho = this.getAttribute('src');
  //
  //     var destaque = document.querySelector('.galeria-destaque');
  //
  //     console.log('Imagem grande: ' + destaque);
  //   });
  //
  // }


  // etapa 6
  // var fotos = document.querySelectorAll('.galeria-foto');
  //
  // for (var i = 0; i <= fotos.length - 1; i++) {
  //
  //   fotos[i].addEventListener('click', function(){
  //     var caminho = this.getAttribute('src');
  //
  //     var destaque = document.querySelector('.galeria-destaque');
  //
  //     destaque.setAttribute('src', caminho);
  //   });
  //
  // }



  /* ----- codigo funcionando ----- */
  for (var i = 0; i <= fotos.length - 1; i++) {

    fotos[i].addEventListener('click', function(){
      var caminho = this.getAttribute('src');

      var destaque = document.querySelector('.galeria-destaque');

      destaque.setAttribute('src', caminho);

      console.log(caminho);
    });

  }



});
