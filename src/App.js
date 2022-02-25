import Navigation from './components/Navigation'; 
import React, { Component } from 'react';

import * as  todos  from './todos.json';

class App extends Component {
  constructor(){
      super();
      this.state = {
        todos
      }
    }
  render() {
  this.state.todos.map((todo, i) => {
    return (

    )
  })
  return (
    <div className="App">
      <Navigation titulo = "Mi primera navegación"/>
    </div>
  );
  }
}

export default App;
