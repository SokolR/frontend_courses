import * as React from 'react';
import { Ajax } from '../../utils/ajax.util';
import './msgFormReact.scss';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class MsgForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formList: [],
      authorName: '',
      textMsg: ''
    };
    Ajax.get(URL, (resp) => {
      this.setState({formList: resp});
    });
  }

  addComment(comment) {
    this.setState({
      authorName: '',
      textMsg: '',
      formList: this.state.formList.concat([comment])
    });
  }
  
  sendMsg(e) {
    e.preventDefault();
    Ajax.post(URL, {author: this.state.authorName, text: this.state.textMsg}, (resp) => {
    this.addComment(resp);
    });
  }

  inputHandlerName(e) {
    const target = e.target;
    console.log(target.value);
    this.setState({
      formList: this.state.formList,
      authorName: target.value,
    });
  }

  inputHandlerMsg(e) {
    const target = e.target;
    console.log(target.value);
    this.setState({
      formList: this.state.formList,      
      textMsg: target.value
    });
  }

  render() {  
    const formItems = [];

    this.state.formList.forEach((item) => {
      const authorName = <li>{ item.author }</li>;
      const authorNameMessage = <li>{ item.text }</li>;
      const authorDateMessage = <div>{ item.date }</div>;
      formItems.push(authorName, authorNameMessage, authorDateMessage);
    });
    
    return <div className='msg-form'>
      <form className="msg-form__header" onSubmit={this.sendMsg.bind(this)}>
        <input type="text" value={this.state.authorName} onInput={this.inputHandlerName.bind(this)}/>
        <textarea value={this.state.textMsg} onInput={this.inputHandlerMsg.bind(this)}></textarea>
        <button>Add comment</button>
      </form>
      <div className="msg-form__content">
      <ul>
        { formItems }
      </ul>
      </div>
    </div>
  }
}