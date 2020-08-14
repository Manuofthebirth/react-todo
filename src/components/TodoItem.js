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

  // option #2 - arrow function
  // markComplete = (event) => {
  //   console.log(this.props)
  // }

  // option #1 - custom method 
  // markComplete(event) {
  //   console.log(this.props)
  // }

  render() {
    // simplify this.props.todo (line 61, 62)
    const {id, title} = this.props.todo;
    return (
      // style #1 - inline style
      // <div style={{color: '#e33', backgroundColor: '#f4f4f4'}}>
      
      // style #2 - style variable
      // <div style={itemStyle}>  

      <div style={this.getStyle()}>
        <h3>
          {/* option #2 */}
          {/* <input type="checkbox" onChange={this.markComplete}/> {''} */}
          
          {/* option #1 */}
          {/* <input type="checkbox" onChange={this.markComplete.bind(this)}/> {''} */}
          
          {/* <input type="checkbox" onChange={this.props.markComplete}/> {''} */}
          <input type="checkbox" onChange={this.props.markComplete.bind
          (this, id)} /> {''}
          {title}
          {/* (this, this.props.todo.id)} /> {''} */}
          {/* {this.props.todo.title} */}
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
