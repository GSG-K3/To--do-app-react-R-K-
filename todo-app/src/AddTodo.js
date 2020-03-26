import React, { Component } from 'react';
import  './App.css';
class AddTodo extends Component {
  state = { newTask: '' };

  handleChange = e => {
    // console.log(e.target.value);
    const taskValue = e.target.value;
    this.setState({ newTask: taskValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({newTask:''})
  };
  render() {
    // console.log(this.props);
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
