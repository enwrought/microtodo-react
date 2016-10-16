/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component, PropTypes } from 'react';
import { toStringTime } from './utils';
import NavLink from './NavLink';

export default class Task extends Component {
  // TODO: handle taskId in the Store
  static propTypes = {
    taskId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    estimate: PropTypes.number.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    dueDate: PropTypes.string,
    color: PropTypes.string,
    initialExpanded: PropTypes.bool
  };

  static defaultProps = {
    description: '(No description)'
  };

  state = {
    expanded: this.props.initialExpanded
  };

  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  expandedContent() {
    const { description, dueDate, taskId } = this.props;
    return (
      <div className="task__content">
        <div className="task__description">{ description }</div>
        <div className="task__modify">
          <span className="task__due-date">Due by: { dueDate }</span>
          <span className="task__edit"><NavLink to={ `/edit/${taskId}` }>Edit</NavLink></span>
          {
            // TODO: mark complete here
          }
        </div>
      </div>
    );
  }

  render() {
    const { name, estimate, completed, color } = this.props;

    const content = this.state.expanded ? this.expandedContent() : '';

    if (completed) {
      return '';
    }

    return (
      <div className="task" style={ { backgroundColor: color } }>
        <div className="task__header" onClick={ this.toggleExpanded }>
          <span className="task__title">
            { name }
          </span>
          <span className="task__time">
            { toStringTime(estimate) }
          </span>
        </div>
        { content }
      </div>
    );
  }
}
