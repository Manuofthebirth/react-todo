import React, {Component} from 'react';
import TodoItem from './TodoItem';
// props need a type
import PropTypes from 'prop-types';

class Todos extends Component {
  // state is in App.js
  // toggleComplete = () => {
  //   console.log('Need to climb the ladder')
  // }

  render() {
    // console.log(this.props.todos)
    return this.props.todos.map( (todo) => (
      // <h3>{todo.title}</h3>

      // props need unique key

      // <TodoItem key={todo.id} todo={todo}/>
      // state is in App.js
      // <TodoItem key={todo.id} todo={todo} toggleComplete={this.toggleComplete} />
      
      <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} deleteTodo={this.props.deleteTodo}/>
    ));
  }
}

// PropTypes ; good practice
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
