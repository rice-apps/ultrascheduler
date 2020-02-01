export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export const addTodo = (description, deadline) => {
    let ID = Math.floor((Math.random() * 100));
    let completed = false;
    let todo = {
        ID,
        description,
        deadline,
        completed
    };
    return {
        type: ADD_TODO,
        todo
    };
}

export const removeTodo = (ID) => ({
    type: REMOVE_TODO,
    ID
});

export const toggleTodo = (ID) => ({
    type: TOGGLE_TODO,
    ID
});