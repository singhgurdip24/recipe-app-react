import React from 'react';

class ViewRecipe extends React.Component{

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