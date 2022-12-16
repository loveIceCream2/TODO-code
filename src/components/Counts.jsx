function Counts({todos}) {
    return (
        <div>
            <p>Pending TODOs: {todos.filter(todo => todo.status == 0).length}</p>
            <p>Working on it TODOs: {todos.filter(todo => todo.status == 1).length}</p>
            <p>Completed TODOs: {todos.filter(todo => todo.status == 2).length}</p>
            <p>Total TODOs: {todos.length}</p>
        </div>
    );
}

export default Counts;