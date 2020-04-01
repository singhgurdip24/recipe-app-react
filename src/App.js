import React from 'react';
import './App.css';
import { Component } from 'react';

import Form from './components/Form';

const API_KEY = "6eda369cac804921bb6b3c0ecc8a24a0";

class App extends Component {
  state = {
    recipes : []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`
                      https://api.spoonacular.com/recipes/search?query=${recipeName}
                      &apiKey=${API_KEY}`);
    const data = await api_call.json();
    this.setState({recipes : data.results});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        {
          this.state.recipes.map (
            recipe => <p key={ recipe.id }> { recipe.title } </p>
          )
        }
      </div>
    );
  }
}

export default App;
