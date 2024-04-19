import React from 'react';

const ToDoItem = ({ todo, onToggleDone, onDeleteToDo }) => {
  return (
    <div className='item'>
      <input
        className='checkbox'
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggleDone(todo.id)}

      />
      <span className='title'>{todo.title}</span>
      <button className='deleteButton' onClick={() => onDeleteToDo(todo.id)} >Delete</button>
    </div>
  );
};

export default ToDoItem;
