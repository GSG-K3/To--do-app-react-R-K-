import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
class App extends Component {
  state = {
    items: [
      { id: Date.now(), task: "wash dishes", checked: true },
      { id: Date.now() + 1, task: "cook ", checked: false }
    ]
  };

  addItem = (item) => {
    // bring old array and save it in variable
    const oldArray = this.state.items;
    // save new task object in an array
    const newItem = [{ id: Date.now(), task: item.newTask, checked: false }];
    // concat the old array with the array which contains the new task object
    const newArray = oldArray.concat(newItem);
    // change the array on state to the new Array in order to display the new array on screen
    this.setState({ items: newArray });
  };
  removeItem = (id) => {
    const oldArray = this.state.items;
    const newArray = oldArray.filter((element) => {
      return element.id !== id;
    });
    this.setState({ items: newArray });
  };
  completeTask = (id) => {
    const oldArray = this.state.items;
    const newArray = oldArray.map((element) => {
      if (element.id === id) {
        element.checked = !element.checked;
      }
      return element;
    });

    this.setState({ items: newArray });
  };
  render() {
    return (
      <div className="App">
        <header className="title"> To-Do List</header>
        <AddTodo addItem={this.addItem} />
        <TodoList
          tasks={this.state.items}
          remove={this.removeItem}
          complete={this.completeTask}
        />
      </div>
    );
  }
}

export default App;
