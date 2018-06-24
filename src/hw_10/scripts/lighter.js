import '../styles/lighter.scss';

export function lighter() {
  const lighter = document.querySelector('.lighter');
  const red = lighter.querySelector('.lighter__color_red');
  const yellow = lighter.querySelector('.lighter__color_yellow');
  const green = lighter.querySelector('.lighter__color_green');
  const LIGHT_ACTIVE = 'light_on';

  function turnRed() {
    red.classList.add(LIGHT_ACTIVE);
    yellow.classList.remove(LIGHT_ACTIVE);
    green.classList.remove(LIGHT_ACTIVE);
  }

  function turnYellow() {
    yellow.classList.add(LIGHT_ACTIVE);
    red.classList.remove(LIGHT_ACTIVE);
    green.classList.remove(LIGHT_ACTIVE);
  }

  function turnGreen() {
    green.classList.add(LIGHT_ACTIVE);
    yellow.classList.remove(LIGHT_ACTIVE);
    red.classList.remove(LIGHT_ACTIVE);
  }

  red.addEventListener('click', turnRed);
  yellow.addEventListener('click', turnYellow);
  green.addEventListener('click', turnGreen);
}