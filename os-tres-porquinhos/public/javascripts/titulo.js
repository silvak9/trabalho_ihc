AFRAME.registerComponent('titulo', {
    init: function () {
      var el = this.el;
      var tituloText = document.querySelector('#titulo');
  
      // Adiciona um listener para o evento de clique ou toque
      document.addEventListener('click', function () {
        // Verifica se o modelo não está visível e, se não estiver, torna-o visível
        if (tituloText.getAttribute('visible')) {
            tituloText.setAttribute('visible', false);
        }
      });
    }
  });