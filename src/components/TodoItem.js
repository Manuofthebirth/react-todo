import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  // dynamic style - ternary operator 
  getStyle = () => {
    return {
      color: '#e33', 
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #000 solid',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  // dynamic style
  // getStyle = () => {
  //   if (this.props.todo.completed) {
  //     return {
  //       textDecoration: 'line-through'      
  //     }
  //   } else {
  //     return {
  //       textDecoration: 'none'
  //     }
  //   }
  // }  

  
  // arrow function
  markComplete = (event) => {
    console.log(this.props)
  }

  // option #2 - custom method
  // markComplete(event) {
  //   console.log(this.props)
  // }

  render() {
    return (
      // <div style={{color: '#e33', backgroundColor: '#f4f4f4'}}>
      // <div style={itemStyle}>  
      <div style={this.getStyle()}>
        <h3>
          {/* option #2 */}
          {/* <input type="checkbox" onChange={this.markComplete.bind(this)}/> {''} */}
          <input type="checkbox" onChange={this.markComplete}/> {''}
          {this.props.todo.title}
        </h3>
      </div>
    )
  }
}

// PropType = single object
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// style variable
// const itemStyle = {
//   color: '#e33', 
//   backgroundColor: '#f4f4f4'
// }


export default TodoItem
