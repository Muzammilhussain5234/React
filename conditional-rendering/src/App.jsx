import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowBtn] = useState(false)
  const [todos,setTodos] = useState(
    [{
      title: "Learn React1",
      description: "Learn React1 with Vite1",
    },
    {
      title: "Learn React2",
      description: "Learn React2 with Vite2",
    },
    {
      title: "Learn React3",
      description: "Learn React3 with Vite 3",
    }
      
    ]
  )
  const Todo = ({ todo }) => {
    return (<>
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.description}</div>
    </>
       
    )
}


  return (
    /* Conditional rendering example */
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
       { /* this will work as condition work only when it is true */ }
       
      {showbtn ? <button>show button is true</button> : <button>show button is false</button> }
      {showbtn && <button>THis shows use case of && which works as if condition</button>}
      {todos.map(todo=>{
        return <Todo todo={todo}  />
      })}
      <div className="card">
        <button onClick={() => setshowBtn(!showbtn)}>showbtn</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
