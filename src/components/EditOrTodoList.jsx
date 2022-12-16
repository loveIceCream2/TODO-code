import Edit from "./Edit";
import TodoList from "./TodoList";
import { useState } from "react";

function EditOrTodoList({filters, todos, handleRemove, options, handleUpdateTodos}) {
    const [edit, setEdit] = useState({id: null});

    const handleEdit = todo => {
        setEdit(todo)
    }

    const handleCancel = () => {
        setEdit({id: null});
    }

    const handleUpdate = (id, newTodo) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
              return newTodo;
            }
            return todo;
          }
        );
      
        handleUpdateTodos(newTodos);
        setEdit({id: null});
    }
    return edit.id === null ? 
    <TodoList filters={filters} todos={todos} handleEdit={handleEdit} handleRemove={handleRemove}/> : 
    <Edit todo={edit} options={options} handleCancel={handleCancel} handleUpdate={handleUpdate}/>
}

export default EditOrTodoList;