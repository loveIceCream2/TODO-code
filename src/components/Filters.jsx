function Filters({filters, handleFilterChange}) {
    return (
        <div>
            Filters: 
            <input type="checkbox" name="pending" value="pending" id="pending" checked={filters[0]} onChange={() => handleFilterChange(0)}/>
            <label htmlFor="pending">Pending</label>
            <input type="checkbox" name="working" value="working" id="working" checked={filters[1]} onChange={() => handleFilterChange(1)}/>
            <label htmlFor="working">Working on it</label>
            <input type="checkbox" name="completed" value="completed" id="completed" checked={filters[2]} onChange={() => handleFilterChange(2)}/>
            <label htmlFor="completed">Completed</label>
        </div>
    )
}

export default Filters;