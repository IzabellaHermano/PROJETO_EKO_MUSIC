document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.querySelector('.menu-toggle');
  const headerButtons = document.querySelector('.header-buttons');
  let mobileActions = sidebar.querySelector('.mobile-actions');

  if (!mobileActions) {
    mobileActions = document.createElement('div');
    mobileActions.className = 'mobile-actions';
    sidebar.appendChild(mobileActions);
  }

  function moveHeaderButtonsToSidebar() {
    if (!headerButtons) return;
    while (headerButtons.firstElementChild) {
      mobileActions.appendChild(headerButtons.firstElementChild);
    }
    headerButtons.style.display = 'none';
  }

  function restoreHeaderButtons() {
    if (!headerButtons) return;
    headerButtons.style.display = 'flex';
    while (mobileActions.firstElementChild) {
      headerButtons.appendChild(mobileActions.firstElementChild);
    }
  }

  function toggleSidebar() {
    const isActive = sidebar.classList.contains('active');
    if (isActive) {
      sidebar.classList.remove('active', 'overlay-full');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    } else {
      sidebar.classList.add('active');
      if (window.innerWidth <= 768) {
        sidebar.classList.add('overlay-full');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      }
    }
  }

  window.toggleSidebar = toggleSidebar; // expõe globalmente

  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleSidebar();
  });

  document.addEventListener('click', function (e) {
    if (!sidebar.classList.contains('active')) return;
    if (sidebar.classList.contains('overlay-full')) {
      const inside = sidebar.contains(e.target) || menuToggle.contains(e.target);
      if (!inside) toggleSidebar();
    }
  });

  function onResize() {
    if (window.innerWidth <= 768) {
      moveHeaderButtonsToSidebar();
    } else {
      restoreHeaderButtons();
      sidebar.classList.remove('active', 'overlay-full');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }

  window.addEventListener('resize', onResize);
  onResize();
});
