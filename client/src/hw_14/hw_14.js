import './hw_14.scss';
import {Ajax} from './utils/ajax.util';

export class TaskList {
  constructor(target) {
    this.target = target;
    this.render();
    Ajax.get('https://evening-dawn-11092.herokuapp.com/list', this.renderListItems.bind(this));
  }

  render() {
    this.renderList();
  }

  renderList() {
    this.ul = document.createElement('ul');
    this.ul.classList.add('taks-list__items');
    this.target.appendChild(this.ul);
  }

  renderListItems(listItems) {
    const documentFragment = document.createDocumentFragment();
    this.listItems = [];

    listItems.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('task-list__item');
      li.textContent = item.title;
      this.listItems.push(li);
      documentFragment.appendChild(li);
    });

    this.ul.appendChild(documentFragment);
  } 
}

const taskList = new TaskList(document.querySelector('#list'));