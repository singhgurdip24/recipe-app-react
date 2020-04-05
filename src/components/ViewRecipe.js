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
        this.setState({activeRecipe:data})
        console.log(this.state.activeRecipe);
    }

    render(){
        return(
            <div>
                <div>React Class</div>
            </div>
        );
    }
}

export default ViewRecipe;