
import { useState } from "react";
import {TodoInput} from "./TodoInput"
import {TodoItem} from "./TodoItem"


function Todo () {
    const [todoList , setTodoList] = useState([]);

    const getData = (todo) => {
        // const payload = {
        //     titel: todo,
        //     status :false,
        // };
          setTodoList([...todoList , todo]);
    };

    return (
        
        <div className="set">
            <div className="set1">
             {todoList.map((e)=>(
               
               <TodoItem todo={e}></TodoItem>
            ))}
           </div>
           <div className="set2">
              <TodoInput getData={getData} />
           </div>
            
        </div>
    )
}

export {Todo}