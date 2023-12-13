AFRAME.registerComponent('mycomponent3', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
        console.log('Este porquinho 3D foi clicado!');
      });
  
      var el = this.el;
      var initialPosition = el.getAttribute('position');
      var targetPosition1 = { x: 1, y: 0, z: 0 }; // Substitua pelos valores desejados
      var targetPosition2 = { x: -1, y: 0, z: 0 }; // Substitua pelos valores desejados
  
      // Animação usando A-Frame
      el.setAttribute('animation', {
        property: 'position',
        dur: 5000, // 5 segundos
        easing: 'linear',
        loop: true,
        to: AFRAME.utils.coordinates.stringify(targetPosition1)
      });
  
      // Event listener para mudar a direção da animação após metade do tempo
      setTimeout(function () {
        el.setAttribute('animation', {
          property: 'position',
          dur: 5000, // 5 segundos
          easing: 'linear',
          loop: true,
          to: AFRAME.utils.coordinates.stringify(targetPosition2)
        });
      }, 2500); // Mudança de direção após 2.5 segundos
    }
  });
  
  