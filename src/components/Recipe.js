import React from 'react';

const Recipe = props => (
    <div className="container">
        <div className="row">
        {
            props.recipes.map (recipe => {
                return(
                    <div className="col-md-4" key={recipe.id} style = {{marginBottom:'2rem'}}>
                        <div className="recipes__box">
                            <img
                            className="recipe__box-img"
                            src={`${props.imgUrl}${recipe.imageUrls}`}
                            alt={recipe.title }
                            />
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    { recipe.title.length < 20 ? `${recipe.title}` :
                                        `${recipe.title.substring(0, 20)}...`
                                    }
                                </h5>
                            </div>
                            <button className="recipe_buttons">View Button</button>
                        </div>
                    </div>   
                );
            })
        }
        </div>
    </div>
)

export default Recipe