document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('nav');

  function toggleNavMenu() {
    if (window.innerWidth < 789) {
      // on a small screen, toggle the menu's display property
      if (nav.style.display === 'block' || nav.style.display === '') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
      }
    } else {
      // on larger screens (via media queries), always display the menu
      nav.style.display = 'block';
    }
  }

  // add a click event listener to the menu button
  menuButton.addEventListener('click', function () {
    toggleNavMenu();
  });

  // call toggleNavMenu initially and whenever the window is resized
  toggleNavMenu();
  window.addEventListener('resize', toggleNavMenu); // call on resize
});
