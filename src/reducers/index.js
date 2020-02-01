import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer';
import BackgroundReducer from './BackgroundReducer';

const Reducer = combineReducers({
    TodoReducer, BackgroundReducer
});

export default Reducer;