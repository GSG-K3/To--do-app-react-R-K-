import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import  './App.css';
class App extends Component {
  state = {
    items:[
      { id: 1, task: 'wash dishes', checked: true },
      { id: 2, task: 'cook ', checked: false }
    ]
  };
   addItem = (item)=>{
  //  console.log(item);
  // bring old array and save it in variable 
  const oldArray = this.state.items; 
  // console.log(oldarray);
  // [{id :  task :  checked:}]
  const newItem =[{id: 3 ,task:item.newTask}]
    //craete new a
     const newArray =  oldArray.concat(newItem); 
  //merge 
  this.setState({items:newArray})
   }
   removeItem = (item)=>{
   }
  render() {
    return (
      
      <div className="App">
        
        <AddTodo addItem ={this.addItem} />
        <TodoList tasks={this.state.items} />
       
      </div>
    );
  }
}



export default App;
