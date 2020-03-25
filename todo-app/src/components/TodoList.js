import React from "react";

function TodoList(props) {
  const tasksArray = props.tasks;
  // create li for each task and save em in new array
  const todoList = tasksArray.map((element) => {
    return <li key={element.id}>{element.task}</li>;
  });

  return <div>{todoList}</div>;
}
export default TodoList;
