import { useState } from 'react';
import './App.scss';
import TodoList from './Components/TodoList';
import Themes from './Components/Themes';

function App() {

  return (
    <>
    <div className="todo-app">
      <Themes/>
      <TodoList/>
    </div>
    </>
  );
}

export default App;
