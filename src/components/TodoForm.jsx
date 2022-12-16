import { useState } from "react";

function TodoForm({onSubmit, options}) {
    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState(options[0].value);
    const [prio, setPrio] = useState(1);
    
    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 10000),
            desc,
            status,
            statusText: options[Number(status)].text,
            prio,
        };

        onSubmit(newTodo);
        setDesc('');
        setStatus(options[0].value);
        setPrio(1);
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
                <label htmlFor="desc">Description: </label>
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
                <label htmlFor="status">Status: </label>
                <select value={status} onChange={handleStatusChange}>
                    {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="prio">Priority: </label>
                <input
                    type="number"
                    id="prio"
                    name="prio"
                    value={prio}
                    onChange={handlePrioChange}
                />
            </div>
            <input type="submit" value="Add TODO"></input>
        </form>
    )
}

export default TodoForm;