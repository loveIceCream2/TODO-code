import editIcon from './../assets/edit.png';
import deleteIcon from './../assets/delete.png';
import { useState } from 'react';

function Todo({todo, handleEdit, handleRemove}) {
    const classes = ['pending', 'working', 'completed']

    return (
        <li>
            {todo.desc}
            <span className={`status ${classes[todo.status]}`}>{todo.statusText}</span>
            <img src={editIcon} alt="Edit icon" onClick={() => handleEdit(todo)}/>
            <img src={deleteIcon} alt="Delete icon" onClick={() => handleRemove(todo.id)}/>
        </li>
    );
}

export default Todo;