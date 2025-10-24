/* eslint-disable react/jsx-key */
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ListGroup>
       { todos.map(todo => {
           return(<TodoItem key={todo.title} todo={todo}/>);   
         })}
     </ListGroup><hr/>
   </>
 ); 
}
export default TodoList;
