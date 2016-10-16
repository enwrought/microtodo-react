import React, { Component } from 'react';
import { colorPalette } from './colorPalette';
import { taskSort } from './taskSort';
import { toStringTime } from './utils';
import Task from './Task';

export default
@colorPalette
class Home extends Component {
  task_array = [
    {
      name: 'Explore Store design',
      estimate: 90,
      description: 'Take a look at localStorage',
      completed: false,
      dueDate: '09/20/16',
      color: Home.getNextColor()
    },
    {
      name: 'Use store instead of default',
      estimate: 60,
      completed: false,
      dueDate: '09/23/16',
      color: Home.getNextColor()
    },
    {
      name: 'Read Zone to Win',
      estimate: 240,
      completed: false,
      dueDate: '09/19/16',
      color: Home.getNextColor()
    },
    {
      name: 'Write stories/design algorithm for scheduling',
      estimate: 45,
      completed: false,
      dueDate: '09/25/16',
      color: Home.getNextColor()
    },
    {
      name: 'Make ColorPalette a decorator',
      estimate: 45,
      completed: false,
      dueDate: '09/30/16',
      color: Home.getNextColor()
    }
  ];

  // TODO: find some way to not recompute this every render
  generateTasks() {
    return taskSort(this.task_array).map((props, keyIndex) =>
      (<Task key={ keyIndex } { ...props } />));
  }

  render() {
    const tasks = this.generateTasks();
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
