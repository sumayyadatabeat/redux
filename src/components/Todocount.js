import React from 'react'
import { useSelector } from 'react-redux'

const Todocount = () => {
    let todolist=useSelector(state=>state.todos)
  return (
    <div>
      <p className='display-5 text-warning '>Todo count</p>
      <h1 className='text-secondary'>
        {todolist.length}
      </h1>
    </div>
  )
}

export default Todocount
