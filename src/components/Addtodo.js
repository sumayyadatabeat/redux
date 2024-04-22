import { useDispatch } from 'react-redux'
import React from 'react'
import {useForm} from 'react-hook-form'
import { addTodo } from '../slices/todoSlice'


const Addtodo = ({setTodolist,todolist}) => {
    

    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()
   
    const onFormSubmit=(todoObj)=>{
       let actionObj=addTodo(todoObj.newtodo)
       dispatch(actionObj)
    }
  return (
    <div>
      <p className='display-5 text-info'>Add new task</p>
    <form className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
        <label htmlFor="todo">New todo</label>
        <input type="text" id="todo" className='form-control' {...register("newtodo")}/>
    </div>
    <button type="submit" className="btn btn-success">Add new todo</button>
    
    
    </form>
   





    </div>
  )
}

export default Addtodo
