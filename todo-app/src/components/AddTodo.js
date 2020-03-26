import React, { Component } from "react";
import "../App.css";
class AddTodo extends Component {
  state = { newTask: "" };

  handleChange = (e) => {
    //whatever the user write in the input it will be saved in state
    const taskValue = e.target.value;
    this.setState({ newTask: taskValue });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // to prevent form refresh
    if (this.state.newTask) {
      this.setState({ newTask: this.state.newTask.trim() });
      this.props.addItem(this.state); // send the new task to the app
    } else {
      alert("enter a task please!");
    }
    this.setState({ newTask: "" }); // empty the input value after submit
  };
  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <div>
            <label className="input-label" htmlFor="task">
              Task:
              <input
                className="input-task"
                type="Text"
                placeholder="Enter task"
                name="task"
                onChange={this.handleChange}
                value={this.state.newTask}
              />
            </label>
            <label className="input-label" htmlFor="submit-btn">
              Add
              <input
                type="submit"
                value="Add"
                name="submit-btn"
                className="add-btn"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default AddTodo;
