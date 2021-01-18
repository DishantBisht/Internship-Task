import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {todos} from './todosReducer';

export const ConfigureStore = () => {
    const store = createStore(todos,applyMiddleware(thunk,logger));

    return store;
}

