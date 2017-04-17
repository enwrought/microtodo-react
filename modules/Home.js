import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { colorPalette } from './colorPalette';
import { taskSort } from './taskSort';
import { toStringTime } from './utils';
import Task from './Task';

@connect(state => {
  return { tasks: state.tasks };
})
export default class Home extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  // TODO: find some way to not recompute this every render
  generateTasks() {
    return taskSort(this.props.tasks).map(props =>
      (<Task key={ props.taskId } { ...props } />));
  }

  render() {
    const tasks = this.generateTasks();
    const tmp = this.generateTasks('hello');
    // TODO: make the actual number of time
    const remainingTime = `Remaining time: ${toStringTime(157)}`;

    // TODO: check to see if the task is complete before including it
    const tasksLeft = `Tasks left: ${this.props.tasks.length}`;

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
