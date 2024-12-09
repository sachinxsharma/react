import React , {useState} from 'react';
import './App.css'

let counter = 4;
function App() {
  const [todos , setTodos ] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym today"
  },{
      id: 2,
      title: "go to school",
      description: "go to school today"
    }, {
      id: 3,
      title: "go to market",
      description: "go to market today"
    }
  ])

  function addTodo(){
    // spread operator and add the new todo 
    setTodos([...todos,{
      id:counter++,
      title: Math.random(),
      description: Math.random()
    }])
    console.log(setTodos)

  }
  return (
    <div>
       <button onClick={addTodo}> add a new todo</button>
       {todos.map(todo => <Todo title = {todo.title} key={todo.id} description = {todo.description} />)}
    </div>
  )
}
function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
