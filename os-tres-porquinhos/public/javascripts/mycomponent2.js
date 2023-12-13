AFRAME.registerComponent('mycomponent2', {
  init: function () {
    var el = this.el;

    el.addEventListener('click', function () {
      console.log('Botão clicado! Iniciando movimentação contínua dos porquinhos.');

      var porquinho1 = document.getElementById('porquinho1');
      var porquinho2 = document.getElementById('porquinho2');
      var porquinho3 = document.getElementById('porquinho3');

      movePorquinho(porquinho1);
      movePorquinho(porquinho2);
      movePorquinho(porquinho3);
    });

    function movePorquinho(porquinho) {
      var initialPosition = porquinho.getAttribute('position');
      var distance = 2; // Distância total que o porquinho percorrerá em uma direção

      // Animação contínua para a esquerda e volta para a direita
      porquinho.setAttribute('animation', {
        property: 'position',
        dur: 5000, // 5 segundos para ir para a esquerda
        easing: 'linear',
        to: AFRAME.utils.coordinates.stringify({ x: initialPosition.x - distance, y: initialPosition.y, z: initialPosition.z }),
        loop: true // Adiciona o loop para a animação ser contínua
      });
    }
  }
});
