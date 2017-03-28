import { createReducer } from 'redux';
import { task_reducer } from './task_reducers';

const todo = createReducer(task_reducer);

export default todo;
