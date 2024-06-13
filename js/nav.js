function toggleMenu() {
    var nav = document.getElementById('sidebar');
    nav.classList.toggle('open');

    var container = document.querySelector('.container-conteudo');
    container.classList.toggle('menu-aberto');
}

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');

  menuToggle.addEventListener('click', function() {
      const icon = this.innerHTML.trim();

      if (icon === '☰') {
          this.innerHTML = '✖';
          this.style.color = '#1a5a8e'; 
      } else {
          this.innerHTML = '☰';
          this.style.color = '#1a5a8e'; 
      }
  });
});