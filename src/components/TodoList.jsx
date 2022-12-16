import { useState } from "react";
import Todo from "./Todo";

function TodoList({filters, todos, handleEdit, handleRemove}) {
    const [edit, setEdit] = useState(false);

    const shownList = todos
                        .filter(todo => filters[todo.status])
                        .sort((a, b) => b.prio - a.prio)
                        .map(todo => <Todo key={todo.id} todo={todo} handleEdit={handleEdit} handleRemove={handleRemove}/>);

    return (
        <div>
           {shownList} 
        </div>
    );
}

export default TodoList;