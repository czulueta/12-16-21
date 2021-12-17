import React, { useContext } from "react" 
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { UserContext } from "../context/UserProvider.js"

export default function Profile(){
  const { 
    addTodo, 
    todos, 
    user: 
      { username }
  } = useContext(UserContext)

  return(
    <div className="profile">
        <h1>Welcome { username }</h1>
        <h3>Add a Todo</h3>
        <TodoForm addTodo={addTodo} />
        <h3>Your Todos</h3>
        <TodoList todos={todos} />
    </div>
  )
}