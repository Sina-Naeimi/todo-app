import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ToDoInput } from "./components/ToDoInput"
import { ToDoList } from "./components/ToDoList"


function App() {

  const [todos, setTodos] = useState([{ id: 0, input: 'Hello! Add your first todo!', complete: true },])
  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { id: todos.length, input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleEditTodo(index) {

    let newTodoList = [...todos]
    let CompletedTodo = todos[index]
    CompletedTodo['complete'] = true
    newTodoList[index] = CompletedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])
  return (
    <>

      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <ToDoList selectedTab={selectedTab} todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
      <ToDoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App   
