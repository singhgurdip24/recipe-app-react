import React from 'react';
import './App.css';
import { Component } from 'react';

import Form from './components/Form';

class App extends Component {
  
  getRecipe(e) {
    e.preventDefault();
    console.log(e.target.elements.recipeName.value);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
