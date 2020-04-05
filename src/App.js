import React from 'react';
import './App.css';
import { Component } from 'react';

import Form from './components/Form';
import Recipe from './components/Recipe';

const API_KEY = "6eda369cac804921bb6b3c0ecc8a24a0";

class App extends Component {
  state = {
    recipes : [],
    baseUrlImg : ''
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`
                      https://api.spoonacular.com/recipes/search?query=${recipeName}
                      &apiKey=${API_KEY}&number=9`);
    const data = await api_call.json();
    this.setState({recipes : data.results});
    this.setState({baseUrlImg: data.baseUri});
  }

  componentDidMount = () => {
    const recipeFromStorage = localStorage.getItem("recipes");
    this.setState({"recipes" : JSON.parse(recipeFromStorage) });
    this.setState({"baseUrlImg" : localStorage.getItem("baseUrl") });
  }
  componentDidUpdate = () => {
    const localrecipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", localrecipes);
    localStorage.setItem("baseUrl", this.state.baseUrlImg);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipe recipes={this.state.recipes} imgUrl={this.state.baseUrlImg}/>
      </div>
    );
  }
}

export default App;
