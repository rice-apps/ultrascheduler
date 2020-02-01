import React from 'react'
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/TodoActions';
import TodoDisplay from './TodoDisplay';

const CompleteTodoDisplay = ({todos, bgColor, toggleTodo}) => {
    let filteredTodos = todos.filter(todo => todo.completed);
    return (<TodoDisplay 
    todosCategory={"Complete"}
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
    (dispatch) => {
        return {
            toggleTodo: id => dispatch(toggleTodo(id))
        }
    }
)(CompleteTodoDisplay);