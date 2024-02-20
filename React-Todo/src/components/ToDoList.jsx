import React from "react";
import ToDo from "./ToDo";

export default function ToDoList( { toDoList, onCheckBtnClick }) {
  return <>
    {
        toDoList.map((toDo) => <ToDo key={toDo.id} toDo={toDo} onCheckBtnClick={onCheckBtnClick}/>)
    }
  </>;
}
