function setupCarousels() {
  document.querySelectorAll('.album-grid').forEach(grid => {
    if (grid.parentNode.classList.contains('album-grid-container')) return;

    const wrapper = document.createElement('div');
    wrapper.classList.add('album-grid-container');
    grid.parentNode.insertBefore(wrapper, grid);
    wrapper.appendChild(grid);

    // botões
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#10094;'; // seta esquerda
    prevBtn.className = 'carousel-btn prev';
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#10095;'; // seta direita
    nextBtn.className = 'carousel-btn next';

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    const scrollAmount = grid.children[0].offsetWidth + 15;

    prevBtn.addEventListener('click', () => {
      grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
}

function handleResize() {
  if (window.innerWidth <= 768) {
    setupCarousels();
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);

 function setupCarouselsPlaylist() {
  document.querySelectorAll('.playlist-grid').forEach(grid => {
    if (grid.parentNode.classList.contains('playlist-grid-container')) return;

    const wrapper = document.createElement('div');
    wrapper.classList.add('playlist-grid-container');
    grid.parentNode.insertBefore(wrapper, grid);
    wrapper.appendChild(grid);

    // botões
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#10094;'; // seta esquerda
    prevBtn.className = 'carousel-btn prev';
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#10095;'; // seta direita
    nextBtn.className = 'carousel-btn next';

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    const scrollAmount = grid.children[0].offsetWidth + 15;

    prevBtn.addEventListener('click', () => {
      grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
}

function handleResizePlaylist() {
  if (window.innerWidth <= 768) {
    setupCarouselsPlaylist();
  }
}

window.addEventListener('resize', handleResizePlaylist);
window.addEventListener('DOMContentLoaded', handleResizePlaylist);
