import './hw_9.scss';

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

alert( randomInteger(1, 100) );