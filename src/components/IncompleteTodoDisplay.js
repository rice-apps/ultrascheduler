import React from 'react'
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/TodoActions';
import TodoDisplay from './TodoDisplay';

const IncompleteTodoDisplay = ({todos, bgColor, toggleTodo}) => {
    let filteredTodos = todos.filter(todo => !todo.completed);
    return (<TodoDisplay 
    todosCategory={"Incomplete"}
    filteredTodos={filteredTodos} 
    bgColor={bgColor}
    toggleTodo={toggleTodo}
    />);
}

export default connect(
    (state) => ({
        todos: state.TodoReducer.todos,
        bgColor: state.BackgroundReducer.color, 
    }),
    (dispatch) => ({
        toggleTodo: id => dispatch(toggleTodo(id))
    })
)(IncompleteTodoDisplay);