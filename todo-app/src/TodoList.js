import React, { Component } from 'react';
import './App.css';

  function TodoList (props) {
   
     const tasksArray = props.tasks;
    const newArray= tasksArray.map( element => {return(
         <li key={element.id} >
            {element.task} 
         </li>

     )})

        return(

            <div>
            {newArray}
            </div>
        )
    
}
export default TodoList; 