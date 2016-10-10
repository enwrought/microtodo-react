import React, { Component, PropTypes } from 'react';
import { toStringTime } from './utils';

const styles = StyleSheet.create({
  taskName: {
    fontSize: 20,
    margin: 10,
    color: 'white'
  },
  taskEstimate: {
    fontSize: 12,
    color: 'gray'
  }
});

export default class Task extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    estimate: PropTypes.number.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    dueDate: PropTypes.string,
    color: PropTypes.string
  };

  state = {
    viewStyle: StyleSheet.create({
      colors: {
        backgroundColor: this.props.color
      }
    })
  };

  render() {
    /* eslint-disable */
    const { name, estimate, description, completed, dueDate, color } = this.props;
    /* eslint-enable */
    // const { viewStyle } = this.state;

    return (
      <View style={ { flex: 1, flexDirection: 'row', backgroundColor: color } }>
        <Text style={ styles.taskName }>
          { name }
        </Text>
        <Text style={ styles.taskEstimate } textAlign="right">
          { toStringTime(estimate) }
        </Text>

      </View>
    );
  }
}
