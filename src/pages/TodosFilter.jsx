import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js'; // Adjust the import path as necessary

import '../assets/styles/filter.css';

// const todos = [
//   { id: 1, name: 'bransh my teeth', completed: true },
//   { id: 2, name: 'go to the gym', completed: false },
//   { id: 3, name: 'pray and read quran', completed: false },
//   { id: 4, name: 'learning programming', completed: false },
//   { id: 5, name: 'take a shower', completed: true },]

export function AppTodoFilter() {
  return <div className='todos-filter'>
    <Header />
    <Main />
  </div >
}

function Header() {
  return <header >
    <h1>TODO</h1>
  </header>
}


function Main() {
  //const [tasks, setTasks] = useState([])
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const [taskName, setTaskName] = useState('')
  const [links, setLinks] = useState('All')

  // Load tasks from localStorage when the component mounts
  // Save tasks to localStorage whenever tasks state changes
  /*
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  */
  let curTasks;
  const itemLeft = tasks.filter(task => task.completed === false).length


  if (links === 'All') curTasks = tasks;
  if (links === 'Active') curTasks = tasks.filter(task => task.completed === false);
  if (links === 'Completed') curTasks = tasks.filter(task => task.completed === true);

  function addTask() {
    setTasks(tasks => [...tasks, { id: Date.now(), name: taskName, completed: false }])
    setTaskName('')
  }

  function deleteTask(id) {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  function toggleCompleted(id) {
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  function clearCompleted() {
    setTasks(tasks => tasks.filter(task => task.completed === false))
  }

  return <main>
    <Form taskName={taskName}
      setTaskName={setTaskName}
      onAddTask={addTask} />

    {tasks.length <= 0 ? <WelcomeMessage /> :
      <Footer itemLeft={itemLeft}
        links={links}
        setLinks={setLinks}
        onClearCompleted={clearCompleted} />}
    <TodoList tasks={curTasks} setTasks={setTasks}
      onDeleteTask={deleteTask}
      onToggleCompleted={toggleCompleted} />


  </main >
}

function Form({ taskName, setTaskName, onAddTask }) {

  function handleSubmit(e) {
    e.preventDefault()

    if (!taskName) return;
    onAddTask()
  }

  return <form className='form' onSubmit={handleSubmit}>
    <input type="text" className='box' placeholder='Create a new todo..'
      value={taskName}
      onChange={e => setTaskName(e.target.value)} />
  </form>

}

function TodoList({ tasks, onDeleteTask, onToggleCompleted }) {

  return <ul>
    {tasks.map(task => <Task task={task} key={task.id}
      onDeleteTask={onDeleteTask}
      onToggleCompleted={onToggleCompleted} />)}
  </ul>
}

function Task({ task, onDeleteTask, onToggleCompleted }) {

  return <li className="box">
    <div >
      <input type="checkbox"
        value={task.completed}
        checked={task.completed}
        onChange={() => onToggleCompleted(task.id)}
      />
      <p className={`${task.completed ? 'completed' : ''}`}>{task.name}</p>
    </div>
    <div className='delete' onClick={() => onDeleteTask(task.id)}>&times;</div>
  </li>
}

function Footer({ itemLeft, links, setLinks, onClearCompleted }) {
  return <footer className="footer box">
    <div className="items-left">
      {itemLeft} items left
    </div>
    <div className="links">
      <div onClick={() => setLinks('All')} className={(links === 'All') ? 'active' : ''} >All</div>
      <div onClick={() => setLinks('Active')} className={(links === 'Active') ? 'active' : ''}>Active</div>
      <div onClick={() => setLinks('Completed')} className={(links === 'Completed') ? 'active' : ''}>Completed</div>
    </div>
    <div className="clearCompleted" onClick={onClearCompleted}>Clear Completed</div>
  </footer >
}

function WelcomeMessage() {
  return <div className='box welcomeMessage'>
    <div>📝 </div>
    <h3 >
      Add a todo to get started! </h3>
  </div>
}


/*
import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage'; // Adjust the import path as necessary

function Main() {
 const [tasks, setTasks] = useLocalStorage('tasks', []);
 const [taskName, setTaskName] = useState('');
 const [links, setLinks] = useState('All');

 let curTasks;
 const itemLeft = tasks.filter(task => task.completed === false).length;

 if (links === 'All') curTasks = tasks;
 if (links === 'Active') curTasks = tasks.filter(task => task.completed === false);
 if (links === 'Completed') curTasks = tasks.filter(task => task.completed === true);

 function addTask() {
    setTasks(tasks => [...tasks, { id: Date.now(), name: taskName, completed: false }]);
    setTaskName('');
 }

 function deleteTask(id) {
    setTasks(tasks => tasks.filter(task => task.id !== id));
 }

 function toggleCompleted(id) {
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
 }

 function clearCompleted() {
    setTasks(tasks => tasks.filter(task => task.completed === false));
 }

 return (
    <main>
      <Form taskName={taskName} setTaskName={setTaskName} onAddTask={addTask} />
      {tasks.length <= 0 ? <WelcomeMessage /> :
        <Footer itemLeft={itemLeft} links={links} setLinks={setLinks} onClearCompleted={clearCompleted} />}
      <TodoList tasks={curTasks} setTasks={setTasks} onDeleteTask={deleteTask} onToggleCompleted={toggleCompleted} />
    </main>
 );
}

*/