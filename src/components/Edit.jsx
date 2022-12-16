import { useState } from "react";

function Edit({todo, options, handleCancel, handleUpdate}) {
    const [desc, setDesc] = useState(todo.desc);
    const [status, setStatus] = useState(todo.status);
    const [prio, setPrio] = useState(todo.prio);
    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: todo.id,
            desc,
            status,
            statusText: options[Number(status)].text,
            prio,
        };
        handleUpdate(todo.id, newTodo)
    };

    const handleDescChange = e => {
        setDesc(e.target.value);
    };

    const handleStatusChange = e => {
        setStatus(e.target.value);
    };

    const handlePrioChange = e => {
        setPrio(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <div>
                <label htmlFor="desc">New description: </label>
                <input 
                    type="text" 
                    id="desc" 
                    name="desc"
                    placeholder="Write a description"
                    value={desc}
                    onChange={handleDescChange} 
                />
            </div>
            <div>
                <label htmlFor="status">New status: </label>
                <select value={status} onChange={handleStatusChange}>
                    {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="prio">New priority: </label>
                <input
                    type="number"
                    id="prio"
                    name="prio"
                    value={prio}
                    onChange={handlePrioChange}
                />
            </div>
            <input type="submit" value="Update TODO"></input>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default Edit;