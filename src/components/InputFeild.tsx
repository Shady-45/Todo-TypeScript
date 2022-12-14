import React, { useRef } from "react";

import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}
const InputField: React.FC<Props> = ({ todo, setTodo,handleAdd }: Props) => {


   const inputRef=useRef<HTMLInputElement>(null)

  return (
    <div>
      <form onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur()
        
        }}>
        <input
          type="text"
          name=""
          id=""
          value={todo}
          onChange={
            (e)=>setTodo(e.target.value)
          }
          placeholder="Enter a task"
          className="input-box"
        />
        <button className="input-button " type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
