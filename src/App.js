import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean bedroom',
        completed: false
      },
      {
        id: 2,
        title: 'Wash dishes',
        completed: false
      },
      {
        id: 3,
        title: 'Brush teeth',
        completed: false
      }
    ]
  }

  // Toggle complete
  toggleComplete = (id) => {
    // console.log(id) // prints id in the console
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) { // match completed id
        todo.completed = !todo.completed
      }
      return todo;
    })}); 
  }

  // Delete
  // copy everything in array >>> ... (spread operator) ; return id =s which are not equal to the id passed in "deleteTodo = (id) =>"
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return(
    <div className="App">
      {/* <h1>Apps</h1> */}
      {/* <Todos todos={this.state.todos} /> */}
      
      {/* state is in App.js ;  */}
      <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
    </div>
    )
  }
}

export default App;
