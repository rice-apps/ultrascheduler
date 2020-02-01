import React, { useState } from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../actions/TodoActions';

const NewTodoControl = ({addTodo}) => {
    const [inputText, setInputText] = useState("");
    const childStyle = {display: 'inline-block', margin:8};
    return (
        <div>
            <input 
                style={childStyle} type="text" 
                value={inputText} 
                onChange={event => setInputText(event.target.value)}
            />
            <button style={childStyle} 
            onClick={() => {
                if (inputText && inputText != "")
                    addTodo(inputText, 'right now')
            }}>
            Add Task!
            </button>
        </div>
    );
};

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
        addTodo: (description, deadline) => dispatch(addTodo(description, deadline))
    })
)(NewTodoControl);