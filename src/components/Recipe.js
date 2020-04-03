import React from 'react';

const Recipe = props => (
    <div className="container">
        <div className="row">
        {
            props.recipes.map (recipe => {
                return(
                    <div className="col-md-4">
                        <div className="recipe__box">
                            <img
                            className="recipe__box-img"
                            src={`${props.imgUrl}${recipe.imageUrls}`}
                            alt={recipe.title }
                            />
                            <div className="recipe__text">
                                <h5>{recipe.title}</h5>
                            </div>
                        </div>
                    </div>   
                );
            })
        }
        </div>
    </div>
)

export default Recipe