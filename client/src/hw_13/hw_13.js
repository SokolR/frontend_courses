import './hw_13.scss';
//alert('111');
let content = document.querySelector('[class="content-wrapper"]');
content.appendChild(createPairsOfElements('lights', 'lights__element', 'lights__btn'));
content.appendChild(createPairsOfElements('lights', 'lights__element', 'lights__btn'));
content.appendChild(createPairsOfElements('lights', 'lights__element', 'lights__btn'));

content.appendChild(createButtonElement('toggle_btn', 'Toggle All'));

function createPairsOfElements(className1, className2, className3){
  let div1 = document.createElement('div');
  div1.setAttribute('class', className1);
  let subDiv1 = document.createElement('div');
  subDiv1.setAttribute('class', className2);

  div1.appendChild(subDiv1);
  div1.appendChild(createButtonElement(className3, 'on/off'));

  return div1;
}

function createButtonElement(className, btnName) {
  let button = document.createElement('button');
  button.setAttribute('class', className);
  let buttonName = document.createTextNode(btnName);
  button.appendChild(buttonName);

  return button;
}