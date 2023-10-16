import { useState } from 'react'
import { TodoContextProvider } from './contexts'
import './App.css'
import { useEffect } from 'react'
import { TodoInputForm, TodoItem } from './components/index'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((previousValue) => {
      return [...previousValue, {id: Date.now(),...todo}]
    })
  }

  const editTodo = (id, todo) => {
    setTodos((previousValue) => {
      return previousValue.map((previousTodo) => {
        return previousTodo.id === id ? todo : previousTodo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos((previousValue) => {
      return previousValue.filter((previousTodo) => {
        return previousTodo.id !== id
      })
    })
  }

  const checkComplete = (id) => {
    setTodos((previousValue) => {
      return previousValue.map((previousTodo)=>{
        return previousTodo.id === id ? {...previousTodo, isCompleted: !previousTodo.isCompleted} : previousTodo
      })
    })
  }


  useEffect(() => {
    
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }

  }, []);


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <TodoContextProvider value={{todos, addTodo, editTodo, deleteTodo, checkComplete}}>
      <div className="bg-[#172842] min-h-screen py-10">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-8 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoInputForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {
                  todos.map((todoItem)=>{
                    return(
                      <div key={todoItem.id} className="w-full">
                        <TodoItem todo={todoItem} />
                      </div>
                    )
                  })
                }
            </div>
        </div>
      </div>
    </TodoContextProvider >
  )
}

export default App
