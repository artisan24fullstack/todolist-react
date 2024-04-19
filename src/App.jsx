//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Header } from "./layout/Header.jsx"
import { TodosReducer } from "./pages/TodosReducer.jsx"
import { Todos } from "./pages/Todos.jsx"
import { AppTodoFilter } from "./pages/TodosFilter.jsx"

import { NotFound } from './pages/NotFound.jsx'

import { Alert } from "./components/Feedback/Alert.jsx"

import { useHashNavigation } from "./hooks/useHashNavigation.js"
import { ErrorBoundary } from "react-error-boundary"

import '../src/assets/styles/index.css'
function App() {

  const { page, param } = useHashNavigation()
  const pageContent = getPageContent(page, param)

  return <>
    <Header page={page} />
    <div className="container my-3">
      <ErrorBoundary FallbackComponent={PageError}>
        {pageContent}
      </ErrorBoundary>
    </div>
  </>
}

function PageError({ error }) {
  return <Alert type="danger">{error.toString()}</Alert>
}

function LoadingCurrentComponent() {
  return <div>Chargement des composants en cours</div>
}
function getPageContent(page, param) {
  /*
  if (page === 'todos-reducer') {
    return <TodosReducer />
  }
  if (page === 'todos') {
    return <Todos />
  }

  if (page === 'todos-filter') {
    return <AppTodoFilter />
  }
  */


  //return <NotFound page={page} />
  return <AppTodoFilter />
}
/*
function App() {
  
  return (
    <>
      <div className="container-grid">
        <h1 className='txt-center'>TODOS with Vite + React</h1>
      </div>

    </>
  )
}
*/
export default App
