import React from 'react';

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
        console.log(data);
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <div>React Class</div>
                <div>{this.props.location.state.recipe}</div>
            </div>
        );
    }
}

export default ViewRecipe;