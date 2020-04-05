import React from 'react';
import { Link } from "react-router-dom";

const API_KEY = "6eda369cac804921bb6b3c0ecc8a24a0";

class ViewRecipe extends React.Component{

    state = {
        activeRecipe : []
    }

    componentDidMount = async () => {
        // const recipeTitle = this.props.location.state.recipe;
        const recipeId = this.props.location.state.recipeId;
        const request = await fetch(`
                          https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`);
        const data = await request.json();
        this.setState({activeRecipe:data})
        console.log(this.state.activeRecipe);
    }

    render(){
        const recipe = this.state.activeRecipe;
        return (
          <div className="container">
              <div className="active-recipe">
                <img className="active-recipe__img" src={recipe.image} alt={recipe.title}/>
                <h3 className="active-recipe__title">{ recipe.title }</h3>
                {/* <h4 className="active-recipe__publisher">
                  Publisher: <span>{ recipe.publisher }</span>
                </h4> */}
                <p className="active-recipe__website">Website: 
                  <span><a href={recipe.sourceUrl}>{recipe.sourceUrl}</a></span>
                </p>
                <button className="active-recipe__button">
                  <Link to="/">Go Home</Link>
                </button>
              </div>
          </div>
        );
    }
}

export default ViewRecipe;