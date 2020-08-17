import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';
// uncomment if using hard coding
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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
    // commented hard coded Todos ; using JSON Placeholder REST API 
    todos: [

      // hard coded Todos
      // {
      //   // id: 1,
      //   id: uuidv4(),
      //   title: 'Clean bedroom',
      //   completed: false
      // },
      // {
      //   // id: 2,
      //   id: uuidv4(),
      //   title: 'Wash dishes',
      //   completed: false
      // },
      // {
      //   // id: 3,
      //   id: uuidv4(),
      //   title: 'Brush teeth',
      //   completed: false
      // }
    ]
  }

  // JSON Placeholder API ; ?_limit=*** >>> array's length
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => this.setState({todos: response.data}))
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

  // Delete Todo
  // copy everything in array >>> ... (spread operator) ; return id =s which are not equal to the id passed in "deleteTodo = (id) =>"
  deleteTodo = (id) => {
    // deletes in the server and update the UI
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }
  // uncomment if using hard coding
  // deleteTodo = (id) => {
  //   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  // }

  
  // Add Todo
  addTodo = (title) => {
    // uncomment if using hard coding
    // const newTodo = {
    //   // id: 4,
    //   id: uuidv4(),
    //   // title: title,
    //   title,
    //   completed: false
    // }

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(response => this.setState({ todos: [...this.state.todos, response.data] }));
    // creates new Todo and add it to state ; uncomment if using hard coding
    // this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return(
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          {/* homepage ; use exact to show only this page */}
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />

              {/* <h1>Apps</h1> */}
              {/* <Todos todos={this.state.todos} /> */}
              
              {/* state is in App.js ;  */}
              <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
    )
  }
}

export default App;
