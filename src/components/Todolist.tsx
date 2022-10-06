import React from 'react'
import './InputField.css'
import {Todo} from "../model"
import Singletodo from './Singletodo';


interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  
}

const Todolist:React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>
{todos.map((todo)=>(
    <li><Singletodo todo={todo} key={todo.id}
    todos={todos}
    setTodos={setTodos}/></li>
))}
    </div>
  )
}

export default Todolist