AFRAME.registerComponent('mycomponent', {
    init: function () {
      var el = this.el;
      var loboModel = document.querySelector('#lobo');
  
      // Adiciona um listener para o evento de clique ou toque
      document.addEventListener('click', function () {
        // Verifica se o modelo não está visível e, se não estiver, torna-o visível
        if (!loboModel.getAttribute('visible')) {
          loboModel.setAttribute('visible', true);
        }
      });
    }
  });