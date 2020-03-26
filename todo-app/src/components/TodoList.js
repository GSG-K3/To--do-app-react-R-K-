import React from "react";

function TodoList(props) {
  const tasksArray = props.tasks;
  if (tasksArray.length === 0) {
    return <div>There are no tasks to display</div>;
  } else {
    // create li for each task and save em in new array
    const todoList = tasksArray.map((element) => {
      if (element.checked === true) {
        return (
          <li
            className="todo-item"
            style={{ textDecoration: "line-through" }}
            key={element.id}
          >
            {element.task}
            <div className="buttons">
              <button
                className="list-btn"
                onClick={() => props.remove(element.id)}
              >
                X
              </button>
              <button
                className="list-btn"
                onClick={() => props.complete(element.id)}
              >
                ✓
              </button>
            </div>
          </li>
        );
      } else {
        return (
          <li key={element.id} className="todo-item">
            {element.task}
            <div className="buttons">
              <button
                className="list-btn"
                onClick={() => props.remove(element.id)}
              >
                X
              </button>
              <button
                className="list-btn"
                onClick={() => props.complete(element.id)}
              >
                ✓
              </button>
            </div>
          </li>
        );
      }
    });

    return (
      <div>
        <ul className="todo-list">{todoList}</ul>
      </div>
    );
  }
}
export default TodoList;
