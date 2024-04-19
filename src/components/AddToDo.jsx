import React, { useState } from 'react';

const AddToDo = ({ onAddToDo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToDo(title);
    setTitle('');
  };

  return (
    <form className='form' onSubmit={handleSubmit} >
      <input
        className='input'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"

      />
      <button className='button' type="submit" >Add</button>
    </form>
  );
};

export default AddToDo;
