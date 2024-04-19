import React, { useState } from 'react';
import AddToDo from './AddToDo.jsx';
import ToDosList from './ToDosList.jsx';

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (title) => {
    setTodos([...todos, { id: Date.now(), title, done: false }]);
  };

  const toggleDone = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='container'>
      <AddToDo onAddToDo={addToDo} />
      <ToDosList todos={todos} onToggleDone={toggleDone} onDeleteToDo={deleteToDo} />
    </div>
  );
};

export default ToDo;
