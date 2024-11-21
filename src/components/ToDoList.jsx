import { ToDoCard } from "./ToDoCard";

export function ToDoList(props) {
    const { todos, handleDeleteTodo, selectedTab } = props

    const filteredTodoList = selectedTab == 'All' ? todos : selectedTab == 'Completed' ? todos.filter(v => v.complete) : todos.filter(v => !v.complete)
    return (
        <>
            {
                filteredTodoList.map((todo, todoIndex) => {
                    return (
                        <ToDoCard key={todoIndex} todoIndex={todos.findIndex(val => val.input == todo.input)} todo={todo} {...props} />
                    )
                })
            }
        </>
    )


}