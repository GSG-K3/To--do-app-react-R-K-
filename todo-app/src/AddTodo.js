import React, { Component } from 'react';

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
