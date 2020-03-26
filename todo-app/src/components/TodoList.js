import React from 'react';

function TodoList(props) {
  const tasksArray = props.tasks;
  // create li for each task and save em in new array
  const todoList = tasksArray.map(element => {
    if (element.checked === true) {
      return (
        <li style={{ textDecoration: 'line-through' }} key={element.id}>
          {element.task}
          <button onClick={() => props.remove(element.id)}> Delete</button>
          <button onClick={() => props.complete(element.id)}> check </button>
        </li>
      );
    } else {
      return (
        <li key={element.id}>
          {element.task}

          <button onClick={() => props.remove(element.id)}> Delete</button>
          <button onClick={() => props.complete(element.id)}> check </button>
        </li>
      );
    }
  });

  return <div>{todoList}</div>;
}
export default TodoList;
