import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodoAsync, getTodoAsync, showTodoState } from './todoSlice'


export default function Todo() {
  
    const todo = useSelector(showTodoState);
    const dispatch = useDispatch();

    const [todoList, settodoList] = useState({
        userId : 69,
        id :69,
        title : "",
        completed : false
    })

    return (
        <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input
          onClick={(e)=>settodoList({...todoList, title : e.target.value})}
        />
        <button onClick={()=>dispatch(addTodoAsync(todoList))}>Add new todo</button>
        {todo.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
        <button onClick={()=>dispatch(getTodoAsync("5"))}>GET TODO</button>
      </div>
  )
}
