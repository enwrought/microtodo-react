// TODO: clean up with the proptypes, move to tasks
import React, { Component, PropTypes } from 'react';

export default class EditTask extends Component {
  static propTypes = {
    params: PropTypes.shape({
      taskId: PropTypes.string
    })
  };

  render() {
    const { taskId } = this.props.params;
    return (
      <div>
        { taskId }
      </div>
    );
  }
}
