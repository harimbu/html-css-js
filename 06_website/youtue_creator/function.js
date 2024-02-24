function handleNav() {
  const nav = document.getElementById('main_nav');
  const hamburger = document.getElementById('hamburger');

  if (!nav.classList.contains('main_nav--active')) {
    nav.classList.add('main_nav--active');
    hamburger.classList.add('hamburger--active');
  } else {
    nav.classList.remove('main_nav--active');
    hamburger.classList.remove('hamburger--active');
  }
}
