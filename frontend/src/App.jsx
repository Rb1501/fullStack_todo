import { useState,  useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'



function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    fetch("http://localhost:3000/todos")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setTodos(data.todos);
      });
  }, []);
  

  return (
     <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
     
      </div>
  )

}
export default App
