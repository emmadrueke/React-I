import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StrikeThrough from './StrikeThrough';

class UpdateToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDo: ['nap', 'time'],
      newItem: ''
    }
  }

  handleItemInput = (event) => {
    this.setState({ newItem: event.target.value });
  }

  addItem = (event) => {
    event.preventDefault();
    const toDoList = this.state.toDo;
    toDoList.push(this.state.newItem);
    this.setState({
      newItem: '',
      toDo: toDoList
    });
  }

  render() {
    return (
      <div>
        {this.state.toDo.map((items, i) => <StrikeThrough key = {i} thing = {items} />)}
        <form onSubmit={this.addItem}>
          <input onChange={this.handleItemInput} placeholder='Add a new Task' value={this.state.newItem} />
          <button>Let's Do It!</button>
          </form>
      </div>
    )
  }
}

export default UpdateToDoList;