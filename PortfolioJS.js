document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {

      ScrollReveal().reveal('.about-div', {
        delay: 200,
        distance: '100px',
        origin: 'left',
        duration: 1000,
        easing: 'ease-in-out',
      });
      
      ScrollReveal().reveal('.hero-text', {
        delay: 200,
        distance: '100px',
        origin: 'left',
        duration: 1000,
        easing: 'ease-in-out',
      });
      
      ScrollReveal().reveal('.hero-img', {
        delay: 200,
        distance: '100px',
        origin: 'right',
        duration: 1000,
        easing: 'ease-in-out',
      });

      ScrollReveal().reveal('.education', {
        delay: 200,
        distance: '100px',
        origin: 'left',
        duration: 1000,
        easing: 'ease-in-out',
      });

      ScrollReveal().reveal('.experience', {
        delay: 200,
        distance: '100px',
        origin: 'right',
        duration: 1000,
        easing: 'ease-in-out',
      });

      ScrollReveal().reveal('.skills-card', {
        delay: 200,
        duration: 1000,
        easing: 'ease-in-out',
      });

      ScrollReveal().reveal('.skills-card2', {
        delay: 200,
        duration: 1000,
        easing: 'ease-in-out',
      });
      
      ScrollReveal().reveal('.contact', {
        delay: 200,
        duration: 1000,
        easing: 'ease-in-out',
      });

      ScrollReveal().reveal('.hero-social', {
        delay: 600,
        distance: '100px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-in-out',
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  var modeIcon = document.getElementById('mode');
  modeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
});