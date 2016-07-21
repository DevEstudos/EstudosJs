// - O JavaScript trabalha com "listenners".
//
// - Listenners são "ações" que o JavaScript fica esperando que aconteça
//
// - Essas ações são chamadas de "eventos"
//
// - Eventos mais comuns: click, load, scroll, mouseover, mouseleave, resize
//
// - Evento: "DOMContentLoaded"
//
// - DOM: (Document Object Model) ou (Modelo de Objetos do documento)
//
// - Todos os elementos HTML são considerados objetos.
//
// - function(){} é chamado de Callback, que é um função que será executada assim que um evento for disparado.
//
// - O JavaScript é mais "verboso" do que o jQuery, ou seja, você precisa escrever mais para ter o mesmo resultado.
//
// window.addEventListener('load', function(){
//
// Repetição de código é ruim - DRY "Don't Repeat Yourself"

// Escopo local (variável definida dentro de um função, só a função em sí tem acesso a ela)

// Escopo global (variévl definidade sem a palavra "var", todo o código tem acesso a ela)
// });


// window.addEventListener('DOMContentLoaded', function(){
//   var larguraPagina = window.innerWidth;
//
//   console.log('Largura do navegador: '+ larguraPagina +'px');
// });
//
//
// window.addEventListener('resize', function(){
//   var larguraPagina = window.innerWidth;
//
//   console.log('Largura do navegador: '+ larguraPagina +'px');
// });
//
//
// window.addEventListener('scroll', function(){
//   var larguraPagina = window.innerWidth;
//
//   console.log('Largura do navegador: '+ larguraPagina +'px');
// });



// -----------------------------------------------------------
function mostrarNavegador(dimensao) {
  var dimensao;
  var texto;

  if (dimensao == 'largura') {
    dimensao = window.innerWidth;
    texto    = 'Largura:';
  }
  else if (dimensao == 'altura') {
    dimensao = window.innerHeight;
    texto    = 'Altura:';
  }

  console.log(texto, dimensao + 'px');
}


window.addEventListener('DOMContentLoaded', function(){
  mostrarNavegador('altura');
});

window.addEventListener('resize', function(){
  mostrarNavegador('largura');
});

window.addEventListener('scroll', function(){
  mostrarNavegador('altura');
});
