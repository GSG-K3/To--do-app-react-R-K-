import React, { Component } from "react";

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
        <form onSubmit={this.handleSubmit}>
          <input
            type="Text"
            placeholder="Enter task"
            onChange={this.handleChange}
            value={this.state.newTask}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default AddTodo;
