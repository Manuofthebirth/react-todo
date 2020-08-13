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
        completed: true
      }
    ]
  }

  render() {
    return(
    <div className="App">
      {/* <h1>Apps</h1> */}
      <Todos todos={this.state.todos}/>
    </div>
    )
  }
}

export default App;
