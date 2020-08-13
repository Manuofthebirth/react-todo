import React, {Component} from 'react';
import TodoItem from './TodoItem';
// props need a type
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    // console.log(this.props.todos)
    return this.props.todos.map( (todo) => (
      // <h3>{todo.title}</h3>

      // props need unique key
      <TodoItem key={todo.id} todo={todo}/>
    ));
  }
}

// PropTypes ; good practice
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
