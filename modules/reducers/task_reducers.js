export const KEYS = {
  TASKS: 'tasks',
  SETTINGS: 'settings'
};

// TODO: clean up/check working
export const ACTIONS = {
  NEW_TASK: 'NEW_TASK',
  EDIT_TASK: 'EDIT_TASK',
  TOGGLE_DONE: 'TOGGLE_DONE'
};

/**
 * every action has taskId, newContent
 */

/**
 * @param {Array(task)} state - list of tasks in store
 * @param {number} taskId - id of task to replace
 * @param {function} replace - prevTaskValue => task object to replace prevTaskValue
 * @returns {Array(task)} updated state
 */
const replaceTaskInState = (state, taskId, replace) => {
  return state.map(task => {
    if (task.id === taskId) {
      return replace(task);
    }
    return task;
  });
};

export default ACTIONS;

// TODO: add mapping
export const task_reducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.NEW_TASK:
      return [...state, action.newContent];
    case ACTIONS.EDIT_TASK:
      return replaceTaskInState(state, action.newContent.taskId, prevTaskValue => ({
        ...prevTaskValue,
        ...action.newContent
      }));
    case ACTIONS.TOGGLE_DONE:
      return replaceTaskInState(state, action.newContent.taskId, prevTaskValue => ({
        ...prevTaskValue,
        done: !prevTaskValue.done
      }));
    default:
      return state;
  }
};

// TODO: use helpers like this
/*
export function saveTask(taskId, task) {
  // TODO: apply action to redux
  const saveAction = {
    type: ACTIONS.EDIT_TASK,
    taskId,
    newContent: task
  };
  return;
}

export function loadTasks() {
  // TODO
  return;
}
*/

// TODO: handle settings
// export const function saveSettings
