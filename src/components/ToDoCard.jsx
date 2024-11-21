export function ToDoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleEditTodo } = props

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete} onClick={() => {
                    handleEditTodo(todoIndex)
                    /* defineDone(true, todo.id) */
                }}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )


}