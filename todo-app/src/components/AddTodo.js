import React, { Component } from 'react';
import  './App.css';
class AddTodo extends Component {
  state = { newTask: "" };

  handleChange = (e) => {
    //whatever the user write in the input it will be saved in state
    const taskValue = e.target.value;
    this.setState({ newTask: taskValue });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // to prevent form refresh
    this.props.addItem(this.state); // send the new task to the app
    this.setState({ newTask: "" }); // empty the input value after submit
  };
  render() {
    return (
      <div>
         
        <form  className="container" onSubmit={this.handleSubmit}>
          
        <img className="pic-todo" alt="Todo" src="logo2.jpg"/>
        <div className="collect">
        <h1 className=" title"> To-Do List</h1>
       
          <input className="input-task"
            type="Text"
            placeholder="Enter task"
            onChange={this.handleChange}
            value={this.state.newTask}
          />
          <input type="submit" value="Add"  className="Add-btn" />
          </div>
        </form>
      </div>
    );
  }
}
export default AddTodo;
