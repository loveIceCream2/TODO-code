import Header from './components/Header'
import TodoForm from './components/TodoForm'
import Filters from './components/Filters'
import EditOrTodoList from './components/EditOrTodoList'
import Counts from './components/Counts'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState([true, true, true]);

  const addTodo = todo => {
    if (!todo.desc || /^\s*$/.test(todo.desc)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };  

  const handleFilterChange = idx => {
    const newFilters = [...filters];
    newFilters[idx] = !newFilters[idx];
    setFilters(newFilters);
  }

  const handleRemove = id => {
    setTodos(todos.filter(todo => todo.id != id));
  }

  const handleUpdateTodos = newTodos => setTodos(newTodos)

  const options = [
    {value: '0', text: 'Pending ⏰'},
    {value: '1', text: 'Working on it 💪'},
    {value: '2', text: 'Completed ✅'},
  ];

  return (
    <div>
      <Header />
      <TodoForm onSubmit={addTodo} options={options}/>
      <Filters filters={filters} handleFilterChange={handleFilterChange}/>
      <EditOrTodoList filters={filters} todos={todos} handleRemove={handleRemove} options={options} handleUpdateTodos={handleUpdateTodos}/>
      <Counts todos={todos}/>
    </div>
  )
}

export default App;
