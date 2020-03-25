import React, { Component } from 'react';

class AddTodo extends Component{
    handleChange(e){
        console.log(e.target.value);
    }
    render (){
        return(
         <div>
           <form >
               <input type="Text"  placeholder="Enter task"onChange={this.handleChange}/>
               <input type="button" value="Add"/>

           </form>
        </div>
        )
    }
}
export default AddTodo; 