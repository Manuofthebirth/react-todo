import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {title: ''}
  
  onSubmit = (event) => {
    // prevent from submiting to file
    event.preventDefault();
    // pass title then reset it
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }
  // gives a value to title when typing
  // onChange = (event) => this.setState({title: event.target.value});
  onChange = (event) => this.setState({[event.target.name]: event.target.value});


  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
          type="text" 
          name="title" 
          style={{flex:'10', padding: '5px'}}
          placeholder="Add Todo.."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit"
          value="submit"
          className="addBtn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

export default AddTodo
