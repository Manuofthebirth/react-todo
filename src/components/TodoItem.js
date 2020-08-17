import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  // dynamic style - ternary operator 
  getStyle = () => {
    return {
      color: '#000', 
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
  // toggleComplete = (event) => {
  //   console.log(this.props)
  // }

  // option #1 - custom method 
  // toggleComplete(event) {
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
          {/* <input type="checkbox" onChange={this.toggleComplete}/> {''} */}
          
          {/* option #1 */}
          {/* <input type="checkbox" onChange={this.toggleComplete.bind(this)}/> {''} */}
          
          {/* <input type="checkbox" onChange={this.props.toggleComplete}/> {''} */}
          <input type="checkbox" onChange={this.props.toggleComplete.bind
          (this, id)} /> {''}
          {title}
          {/* (this, this.props.todo.id)} /> {''} */}
          {/* {this.props.todo.title} */}
          <button onClick={this.props.deleteTodo.bind(this, id)} style={deleteBtn}>X</button>
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

const deleteBtn = {
  background: '#e33',
  border: 'none',
  borderRadius: '50%',
  color: '#fff',
  cursor: 'pointer',
  float: 'right',
  padding: '5px 10px'
}

export default TodoItem
