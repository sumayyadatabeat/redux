import React from 'react'
import { UseSelector, useSelector } from 'react-redux'

const Todolist = () => {
    let todolist=useSelector(state=>state.todos)

  return (
    <div>
      <p className='display-5 text-primary'>List of todo</p>
      <div className="text-center">
        {
            todolist.map((todo,index)=><h1 key={index}>{todo}</h1>
        )
        }
    </div>
    </div>
  )
}

export default Todolist
