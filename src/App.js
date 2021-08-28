import React from 'react';
import ToDoList from './ToDoList';
import './App.css';
import { addItem, deleteItem, editItem, getItems } from './storage';
import Input from './Input';
function App() {
  const [value, setValue] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'todo') {
      setValue(value);
    }
  };
  const addTodo = async (event) => {
    event.preventDefault();
    await addItem(value);
    setValue('');
    getTodos();
  };
  const getTodos = async () => {
    const todos = await getItems();
    setTodos(todos);
  };
  const deleteTodo = async (event, item) => {
    event.preventDefault();
    await deleteItem(item);
    getTodos();
  };
  const editTodo = async (event, item) => {
    event.preventDefault();
    const edited = prompt(`Edit '${item}' to ?`);
    console.log('edited', edited);
    await editItem(item, edited);
    getTodos();
  };
  React.useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="App">
      <h1>To Do</h1>
      <Input value={value} handleChange={handleChange} name="todo" />
      <button onClick={addTodo}>Add ToDo</button>
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
