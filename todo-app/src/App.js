import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  state = {
    items:[
      { id: 1, task: 'wash dishes', checked: true },
      { id: 2, task: 'cook ', checked: false }
    ]
  };
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList tasks={this.state.items} />
      </div>
    );
  }
}

export default App;
