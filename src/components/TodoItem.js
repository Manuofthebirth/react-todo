import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    return (
      // <div style={{color: '#e33', backgroundColor: '#f4f4f4'}}>
      <div style={itemStyle}>  
        <h3>{this.props.todo.title}</h3>
      </div>
    )
  }
}

// PropType = single object
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// style variable
const itemStyle = {
  color: '#e33', 
  backgroundColor: '#f4f4f4'
}


export default TodoItem
