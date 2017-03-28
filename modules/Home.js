import React, { Component } from 'react';
import { colorPalette } from './colorPalette';
import { taskSort } from './taskSort';
import { toStringTime } from './utils';
import Task from './Task';

@colorPalette
export default class Home extends Component {
  task_array = [
    {
      taskId: 0,
      name: 'Explore Store design',
      estimate: 90,
      description: 'Take a look at localStorage',
      completed: false,
      dueDate: '09/20/16',
      color: Home.getNextColor()
    },
    {
      taskId: 1,
      name: 'Use store instead of default',
      estimate: 60,
      completed: false,
      dueDate: '09/23/16',
      color: Home.getNextColor()
    },
    {
      taskId: 2,
      name: 'Read Zone to Win',
      estimate: 240,
      completed: false,
      dueDate: '09/19/16',
      color: Home.getNextColor()
    },
    {
      taskId: 3,
      name: 'Write stories/design algorithm for scheduling',
      estimate: 45,
      completed: false,
      dueDate: '09/25/16',
      color: Home.getNextColor()
    },
    {
      taskId: 4,
      name: 'Make ColorPalette a decorator',
      estimate: 45,
      completed: false,
      dueDate: '09/30/16',
      color: Home.getNextColor()
    }
  ];

  // TODO: find some way to not recompute this every render
  generateTasks() {
    return taskSort(this.task_array).map(props =>
      (<Task key={ props.taskId } { ...props } />));
  }

  render() {
    const tasks = this.generateTasks();
    const tmp = this.generateTasks('hello');
    // TODO: make the actual number of time
    const remainingTime = `Remaining time: ${toStringTime(157)}`;

    // TODO: check to see if the task is complete before including it
    const tasksLeft = `Tasks left: ${this.task_array.length}`;

    return (
      <div className="home">
        <div className="home__overview">
          <span className="home__time-left">{ remainingTime }</span>
          <span className="home__tasks-left">{ tasksLeft }</span>
        </div>
        <div>
          { tasks }
        </div>
      </div>
    );
  }
}
