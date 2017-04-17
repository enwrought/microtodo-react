import { combineReducers } from 'redux';
import { task_reducer } from './task_reducers';

const reducers = combineReducers({
  tasks: task_reducer
});

export default reducers;
