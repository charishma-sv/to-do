import React from 'react';

function ToDoList(props) {
  const { todos } = props;
  return (
    <div>
      {todos.length ? (
        <ul>
          {todos.map((item) => (
            <li key={item}>
              <span> {item}&emsp;</span>
              <span>&emsp;</span>

              <button onClick={(event) => props.editTodo(event, item)}>
                Edit
              </button>
              <span> &emsp;</span>
              <button onClick={(event) => props.deleteTodo(event, item)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No items exist yet</h2>
      )}
    </div>
  );
}

export default ToDoList;
