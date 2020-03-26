import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import  './App.css';
class App extends Component {
  state = {
    items: [
      { id: 1, task: "wash dishes", checked: true },
      { id: 2, task: "cook ", checked: false }
    ]
  };

  addItem = (item) => {
    // bring old array and save it in variable
    const oldArray = this.state.items;
    // save new task object in an array
    const newItem = [{ id: 3, task: item.newTask, checked: false }];
    // concat the old array with the array which contains the new task object
    const newArray = oldArray.concat(newItem);
    // change the array on state to the new Array in order to display the new array on screen
    this.setState({ items: newArray });
  };
  render() {
    return (
      
      <div className="App">
        <AddTodo addItem={this.addItem} />
        <TodoList tasks={this.state.items} />
       
      </div>
    );
  }
}

export default App;
