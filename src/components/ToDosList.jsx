import React from 'react';
import ToDoItem from './ToDoItem.jsx';

const ToDosList = ({ todos, onToggleDone, onDeleteToDo }) => {
  return (
    <div className='list'>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onDeleteToDo={onDeleteToDo}
        />
      ))}
    </div>
  );
};

export default ToDosList;
