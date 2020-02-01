import './index.css'

import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducer from './reducers/index.js';

import App from './App'

const store = createStore(Reducer);

console.log(store.getState());

render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.querySelector('#app')
)
