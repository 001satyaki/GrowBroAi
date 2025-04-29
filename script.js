document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open'); // NOT collapsed
    navLinks.classList.remove('collapsed');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('collapsed');
      navLinks.classList.remove('open');
      navLinks.style.display = 'flex';
    } else {
      navLinks.classList.add('collapsed');
      navLinks.style.display = 'none';
    }
  });
});

  
