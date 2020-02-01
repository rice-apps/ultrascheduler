import React from 'react'

const TodoDisplay = ({todosCategory, filteredTodos, bgColor, toggleTodo}) => {
    return (
        <div style={{backgroundColor: bgColor}}>
            <h1>{todosCategory}</h1>
            <ul>
                {filteredTodos.map(todo => (
                    <li 
                    key={todo.ID}
                    onClick={() => toggleTodo(todo.ID)}
                    >
                    {todo.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoDisplay;