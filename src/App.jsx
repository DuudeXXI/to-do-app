import { useState } from "react";
import './App.scss';
import TodoList from './Components/TodoList';
import Themes from './Components/Themes';

function App() {

  const [themes, setThemes] = useState({
    mono:true,
    colorful:false,
})

  return (
    <>
    <div className= {themes.mono === true ? "todo-app-mono" : "todo-app-colorful"}>
      <Themes themes={themes} setThemes={setThemes} />
      <TodoList />
    </div>
    </>
  );
}

export default App;
