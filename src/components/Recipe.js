import React from 'react';

const Recipe = props => (
    <div>
        {
            props.recipes.map (recipe => {
                return(
                    <div key={ recipe.id }>
                        <img src={`${props.imgUrl}${recipe.imageUrls}`} />
                        <p> { recipe.title } </p>
                    </div>
                );
            })
        }
    </div>
)

export default Recipe