import React,{useState} from 'react';

import './App.css';
import { Todo } from './model';
import InputFeild from './components/InputFeild';
import Todolist from './components/Todolist';

function App() {
 /*  let musix:string ="kendrick"
  let age:number | string =24;
  let isTrue:boolean=true;
  let hobbies:string[];
  let role:[number,string]; */

/*   type Person={
    name:string,
    age?:number
  }

  let person:Person ={
    name:"Rahul",
  age:22
  }
let lotOfPeople :Person[]
 *//* 
let pronto:(name:string)=>string */
/* function printName(name:string){
  console.log(name);
  
  
} */
const [todo, setTodo] = useState<string>(' ')
const [todos,setTodos]=useState<Todo[]>([])

const handleAdd =(e:React.FormEvent)=>{
  e.preventDefault();
  if(todo){
    setTodos([...todos,{id:Date.now(),todo,isDone:false}])
    setTodo(" ");
  }
}
console.log(todos);

  return (
    <div className="App">
  <span className='heading'>TASK IT</span>
  <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
  <Todolist todos={todos} setTodos={setTodos}  />
  

    </div>
  );
}

export default App;
