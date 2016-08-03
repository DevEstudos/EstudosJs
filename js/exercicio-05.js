document.addEventListener('DOMContentLoaded', function(){

  /* ----- variaveis ----- */
  var destaque = document.querySelector('.galeria-destaque');
  var fotos    = document.querySelectorAll('.galeria-foto');

  var numeracaoAtual = document.querySelector('.galeria-numeracao-atual');
  var numeracaoTotal = document.querySelector('.galeria-numeracao-total');



  /* ----- funcoes ---- */
  function galeriaTrocar() {
    var clicado = this.getAttribute('src');

    destaque.setAttribute('src', clicado);
  }

  function galeriaNumeracaoDefinicao(imagem, posicao) {
    var posicao = posicao + 1;

    imagem.setAttribute('data-numeracao', posicao);
  }

  function galeriaNumeracaoTotal() {
    var total = fotos.length;

    numeracaoTotal.innerHTML = total;
  }

  function galeriaNumeracaoAtual() {
    var atual = this.getAttribute('data-numeracao');

    numeracaoAtual.innerHTML = atual;
  }



  /* ----- galeria em funcionamento ----- */
  for (var i = 0; i < fotos.length; i++) {
    galeriaNumeracaoDefinicao(fotos[i], i);

    fotos[i].addEventListener('click', galeriaTrocar);
    fotos[i].addEventListener('click', galeriaNumeracaoAtual);
  }

  galeriaNumeracaoTotal();

});
