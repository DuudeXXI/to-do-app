import { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";


const TodoList = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if( null === JSON.parse(localStorage.getItem('todo'))){
            return;
        }
        setTodos(JSON.parse(localStorage.getItem('todo')))

    }, [])

    // CREATE
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        localStorage.setItem('todo', JSON.stringify(newTodos))
        setTodos(newTodos)
    };

    // UPDATE
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
        localStorage.setItem("todo", JSON.stringify(todos))
        console.log(todos);
    }
    // DELETE
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
        localStorage.setItem('todo', JSON.stringify(removeArr))
    };  
    
    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete =!todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
        localStorage.setItem('todo', JSON.stringify(updatedTodos))

    }

    return ( 

        <div>
            <h1>Whats the plan</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
     );
}
 
export default TodoList;